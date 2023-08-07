import React from 'react';
import { useEffect, useState } from 'react';
import MyProductComp from '../components/MyProductComp';


/**
 * First we get the username of the currently logged in user using /users/info/
 * Then we get all of the grafts connected to that username using /grafts/search/user/
 */
export default function MyProductsPage(props) {


    const [products, setProducts] = useState([]);


    /**
     * Gets user info 
     */
    useEffect(() => {
        (
            async () => {
                const apiUrl = "http://54.174.140.152:8000/users/info/";

                // Retrieve the JWT token from localStorage
                const jwtToken = localStorage.getItem("jwt");

                // Data to be sent in the request body
                const requestData = {
                    jwt: jwtToken
                };

                const requestOptions = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                        body: JSON.stringify(requestData),
                };

                await fetch(apiUrl, requestOptions)
                    .then((response) => response.json())
                    .then((data) => {

                        // This is where you call the grafts by username endpoint usint data[0].username as user field 

                    })
                    .catch((error) => console.error("Error:", error));

    
            }
        )();
    }, [])



    return (
        <div>
            <h1>Your Products</h1>

            {
                products.map((product) => {
                    return  <MyProductComp
                                title = {product.name}
                                category = {product.category}
                                description = {product.description}
                                regulation = {product.regulation}
                                image = {product.image}
                                link = {product.purchase_link}
                                price = {product.price}
                            />
                })
                
            }

        </div>
    );
}

