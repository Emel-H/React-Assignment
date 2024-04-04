import React from "react"
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

 
const Checkedout = () => {
    return (
        <main>
            <Container>
                <h1>Your Purchase was successful</h1>
                <Row className="justify-content-md-center mt-5 mx-5">
                    <Link className="btn btn-info mt-5" to="/">Back to Store</Link>
                </Row>
            </Container>
            
        </main>
    );
};
 
export default Checkedout;