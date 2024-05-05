import React from 'react';
import { useEffect, useState } from 'react';
import MyProductComp from '../components/MyProductComp';
import JSONbig from 'json-bigint';



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
                const apiUrl = "http://34.201.53.67:8000/users/info/";
    
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
                    .then(async (data) => {
    
    
                        const url = "http://34.201.53.67:8000/grafts/search/user";
                        const graftRequestData = {
                            username: data[0].username
                        };
                        const graftRequestOptions = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(graftRequestData),
                        };
    
                        await fetch(url, graftRequestOptions)
                            .then((response) => response.text()) // Get response as text
                            .then((data) => {
                                // Parse response using JSONbig
                                const parsedData = JSONbig.parse(data);
                                setProducts(parsedData);
                            })
                            .catch((error) => console.error("Error:", error));
    
                    })
                    .catch((error) => console.error("Error:", error));
    
    
            }
        )();
    }, [products]);
    

    // console.log(products[0]);



    /**
     * When user deletes a 
     */


    return (
        <div>
            <h1 className='font-[Montserrat] text-3xl md:text-5xl font-regular text-center mt-10'>Your Products</h1>
            <p className='font-[Montserrat] text-sm font-regular text-center mx-3 my-4 text-neutral-400'>When you delete a product, you will regain the credit you used to post the product.</p>
            {
                products.map((product) => {
                    return  <MyProductComp
                                id = {product.id}
                                title = {product.name}
                                category = {product.category_id}
                                description = {product.description}
                                regulation = {product.regulation_id}
                                image = {product.image}
                                link = {product.purchase_link}
                                price = {product.price}
                            />
                })
                
            }

        </div>
    );
}

