import React from 'react';
import { BasicLayout } from '../components/layout';
import { Row, Col, Card, CardDeck, CardColumns } from 'react-bootstrap';

function ActorCard({ actor }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={actor.image} />
            <Card.Body>
                <Card.Title>{actor.actorLabel}</Card.Title>
            </Card.Body>
        </Card>
    )
}


function MissedPage({ actors }) {

    const missedActors = Object.values(actors).filter((actor) => {
        return !actor.guessed && actor.encountered
    })
    return (
        <BasicLayout>
            <h1>you missed {missedActors.length} actors</h1>
            <Row>
                <Col>
                    <CardColumns >
                        {missedActors.map((actor) => <ActorCard key={actor.actorLabel} actor={actor} />)}
                    </CardColumns>
                </Col>
            </Row>
        </BasicLayout>
    )
}
export default MissedPage