class SparqlClient {
    constructor(url = 'https://query.wikidata.org/sparql') {
        this.baseUrl = url
    }

    async sparql(queryString) {
        const url = this.baseUrl + '?query=' + encodeURIComponent(queryString)
        return fetch(url, {
            headers: {
                'Accept': 'application/sparql-results+json'
            }
        })
            .then(res => res.json())
            .then(this.parseSparqlResult)
    }

    async getMoviesForActor(name, limit = 5) {
        const query = `
            SELECT distinct ?movie ?movieLabel
            WHERE {
                ?actor rdfs:label "${name}"@en.
                ?actor wdt:P106 ?occupation.
                ?occupation wdt:P279+ wd:Q33999.
                ?movie wdt:P161 ?actor.
                ?movie wdt:P2142 ?boxOffice.
                SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
            }
            ORDER BY DESC(?boxOffice)
            limit ${limit}
        `
        return this.sparql(query)
    }

    async getActorsForMovie(movie, limit = 10) {
        const query = `
            SELECT distinct ?movie ?movieLabel ?actor ?actorLabel ?genderLabel ?image
            WHERE {
                ?movie wdt:P31/wdt:P279* wd:Q11424.
                ?movie rdfs:label "${movie.movieLabel}"@en.
                ?movie wdt:P161 ?actor.
                ?actor wdt:P21 ?gender.
                ?actor wdt:P18 ?image.
                OPTIONAL { ?actor wdt:P2218 ?netWorth }.
                SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
            }
            order by DESC(?netWorth)
            limit ${limit}
        `
        return this.sparql(query)
    }

    async getActorsForMovies(movies) {
        return await Promise.all(
            movies.map(async (movie) => {
                return await this.getActorsForMovie(movie)
            })
        )
    }

    async getDetailsForActor(name, limit = 1) {
        const query = `
            SELECT distinct ?actor ?actorLabel ?image ?genderLabel
            WHERE {
                ?actor rdfs:label "${name}"@en.
                ?actor wdt:P106 ?occupation.
                ?actor wdt:P21 ?gender
                OPTIONAL{?actor wdt:P18 ?image}.
                ?occupation wdt:P279* wd:Q33999.
                SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
            }
            limit ${limit}
        `
        return this.sparql(query)
            .then((result) => {
                return result[0]
            })
    }

    async getRelatedActors(actor) {
        return this.getMoviesForActor(actor.actorLabel)
            .then((movies) => {
                return this.getActorsForMovies(movies)
            })
            .then((actorGroups) => {
                const actors = {}
                for (const actorGroup of actorGroups) {
                    for (const relatedActor of actorGroup) {
                        const name = relatedActor.actorLabel
                        const movie = {
                            movieLabel: relatedActor.movieLabel,
                            movie: relatedActor.movie,
                        }
                        if (name in actors) {
                            actors[name].movies.push(movie)
                        } else {
                            actors[name] = {
                                guessed: actor.actorLabel === name ? true : null,
                                encountered: actor.actorLabel === name,
                                relatedActorsPath: [...(actor.relatedActorsPath || []), [[actor, movie, relatedActor]]],
                                actorLabel: name,
                                actor: relatedActor.actor,
                                image: relatedActor.image,
                                genderLabel: relatedActor.genderLabel,
                                movies: [movie],
                            }
                        }
                    }
                }
                return actors
            })
    }

    parseSparqlResult({ results }) {
        const parseField = ({ type, value }) => {
            switch (type) {
                case "literal":
                    return value
                case "uri":
                    return value
                default:
                    return value
            }
        }
        const parseEntry = (entry) => {
            const result = {}
            for (const [key, field] of Object.entries(entry)) {
                const parsed = parseField(field)
                result[key] = parsed
            }
            return result
        }
        return results.bindings.map((entry) => {
            return parseEntry(entry)
        })
    }
}

export default SparqlClient