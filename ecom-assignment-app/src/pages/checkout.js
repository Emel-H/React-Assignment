import React from "react";
import { Link } from 'react-router-dom';
import {Container, Row, Col, Button} from 'react-bootstrap'; 
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
            <Row key={1} className=" border bg-dark text-light">
                <Col>
                    <p>Items</p>
                </Col>
                <Col className="col-auto">
                    <p>Prices</p>
                </Col>
            </Row>
        );
        for(let i=0; i<count; i++){
            checkout.push(
                <Row key={i+2} className=" border-left border-right bg-white">
                    <Col>
                        <p>{items[i].item}</p>
                    </Col>
                    <Col className="col-auto">
                        <p>{prices[i].price}$</p>
                    </Col>
                </Row>
            );
        }
        checkout.push(
            <Row key={110} className=" border bg-white font-bold">
                
                <Col>
                    <p>Total</p>
                </Col>
                <Col className="col-auto">
                    <p>{total}$</p>
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

    function getCheckoutButton(count){
        if(count>0){
            return (<Link className="btn btn-info mt-5" onClick={function(){clear()}} to="/checkoutsuccess">Check Out</Link>)
        }
        else{
            return <Button className="btn btn-secondary mt-5" disabled>Check Out</Button>
        }
    }

    const checkoutButton = getCheckoutButton(count);

    return (
        <main>
            <Container>
                <h1>Checkout</h1>
                <Row key={0} className="justify-content-center mt-5 mx-5">
                    <Container>{checkout}</Container>
                    {checkoutButton}
                </Row>
                
            </Container>
            
        </main>
    );
};
 
export default Cart;