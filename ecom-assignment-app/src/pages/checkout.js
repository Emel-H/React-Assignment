import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cartStore } from "../util/CartStore";

function getTotal(count, prices){
    
    if(count>0){
        let total =0;
        for(let i=0; i<count; i++){
            total += parseFloat(prices[i].price);
        }
        total = Math.round(total*100)/100;
        return total;
    }
    else{
        return 0;
    }
}

function getCheckout(count, items, prices, total){
    
    if(count>0){
        let checkout = [];
        checkout.push(
            <Row key={1} className="justify-content-center border">
                <Col md={4}>
                    <h3>Items</h3>
                </Col>
                <Col md={4}>
                    <h3>Prices</h3>
                </Col>
            </Row>
        );
        for(let i=0; i<count; i++){
            checkout.push(
                <Row key={i+2} className="justify-content-center border">
                    <Col md={4}>
                        <p>{items[i].item}</p>
                    </Col>
                    <Col md={4} >
                        <p>{prices[i].price}$</p>
                    </Col>
                </Row>
            );
        }
        checkout.push(
            <Row key={110} className="justify-content-center border">
                <Col md={4}>
                    <h3>Total</h3>
                </Col>
                <Col md={4}>
                    <h3>{total}$</h3>
                </Col>
            </Row>
        );
        return checkout;
    }
    else{
        return (
            <Row className="justify-content-center mt-5 mx-5">
                <h3>No Items in your cart, please view our lovely items in the shop</h3>
            </Row>
        );
    }
}

function Cart() {
    
    const count = cartStore((state) => state.count);
    const items = cartStore((state) => state.items);
    const prices = cartStore((state) => state.prices);
    const clear = cartStore((state) => state.clear);

    const total = getTotal(count, prices);
    const checkout = getCheckout(count, items, prices, total);

    return (
        <main>
            <Container>
                <h1>Checkout</h1>
                <Row key={0} className="justify-content-center mt-5 mx-5">
                    <Container>{checkout}</Container>
                    <Link className="btn btn-info mt-5" onClick={function(){clear()}} to="/checkoutsuccess">Check Out</Link>
                </Row>
                
            </Container>
            
        </main>
    );
};
 
export default Cart;