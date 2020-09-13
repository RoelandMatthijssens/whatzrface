import React from 'react';
import { BasicLayout } from '../components/layout';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <BasicLayout>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Link to="/play">
                        <Button variant="primary">Start Playing Now!</Button>
                    </Link>
                </p>
            </Jumbotron>
        </BasicLayout>
    )
}
export default HomePage