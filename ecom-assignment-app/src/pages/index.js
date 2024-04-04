import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 
const url = 'https://v2.api.noroff.dev/online-shop';

function GetProducts(search){
    let [products, setProducts] = useState([]);
    // State for holding our loading state
    const [isLoading, setIsLoading] = useState(false);
    // State for holding our error state
    const [isError, setIsError] = useState(false);

    // The useEffect will run once when the component first mounts
    useEffect(() => {
        async function getData() {
            try {
                // Reset the error state in case there as an error previously
                setIsError(false);
                // Turn on the loading state each time we do an API call
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                // Setting our `products` state to the API data we received
                setProducts(json.data);
                // Clear the loading state once we've successfully got our data
                setIsLoading(false);
            } catch (error) {
                // Clear the loading state if we get an error and then
                // set our error state to true
                setIsLoading(false);
                setIsError(true);
            } 
        }
        getData();
    }, []);

    if (isLoading) {
        return <h2>Loading posts</h2>;
    }
    else if (isError){
        return <h2>Error loading data</h2>;
    }
    else{
        
        if(products.length >1){
            const pop = (products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())||product.description.toLowerCase().includes(search.toLowerCase())));
            return pop.map((product) => ( 
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image.url} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text> {product.description} </Card.Text>
                        <Card.Text> {product.price===product.discountedPrice ? product.discountedPrice+"$" : product.discountedPrice+"$ discounted:"+ (Math.round((product.discountedPrice-product.price))) +"$ "} </Card.Text>
                        <Button variant="primary">View</Button>
                    </Card.Body>
                </Card>
         ));
        }
        else{
            return <h2> no match </h2>;
        }
        
    }
    
}



function Home() {

    const [searchValue, setSearchValue] = useState("");
    

    const products = GetProducts(searchValue); 
    let prods = products;
    
    function onSearchChange(event) {
        setSearchValue(event.target.value);
      }

    return (
        <main>
            <h1>eCOM:</h1>
            <h2>Your primary destination for great deals</h2>
            <Container>
                <Row>
                    <Form.Control value={searchValue} className="m-5" size="lg" type="text" placeholder="Search" onChange={onSearchChange} />
                </Row>
                <Row>
                    {prods}
                </Row>
            </Container>
        </main>
        
    );
};
 
export default Home;