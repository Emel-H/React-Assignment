import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';;
 
function Product(){
    let params = useParams()
    console.log(params)

    return (
        <main>
            <Container>
                <h1>Welcome to product</h1>
                <Row>
                    <Col>Individual product page: {params.id}</Col>
                </Row>
            </Container>
            
        </main>
    );
};
 
export default Product;