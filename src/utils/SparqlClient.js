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

    async getMoviesForActor(name, limit = 25) {
        const query = `
            SELECT distinct ?actor ?actorLabel ?movie ?movieLabel ?boxOffice
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

    async getDetailsForActor(name, limit = 1) {
        const query = `
            SELECT distinct ?actor ?actorLabel ?image
            WHERE {
                ?actor rdfs:label "${name}"@en.
                ?actor wdt:P106 ?occupation.
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

    parseSparqlResult({ results }) {
        console.log(results)
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