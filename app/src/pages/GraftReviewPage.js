import React, { useState, useEffect } from 'react';
import MyProductComp from '../components/MyProductComp';
import GraftReviewComp from '../components/GraftReviewComp';
import JSONbig from 'json-bigint';


/**
 * 
 * This page should be blocked to any user without the "is_staff" parameter
 * Staff will use this page to approve submitted grafts 
 * 
 */
export default function GraftReviewPage(props) {

    const [isStaff, setIsStaff] = useState(false);
    const [products, setProducts] = useState([]);

    // getting user info to make sure user is staff
    useEffect(() => {
        (
            async () => {
                const apiUrl = "https://34.201.53.67:8000/users/info/";

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
                    .then((response) => response.text()) // Get response as text
                    .then((data) => {
                        // Parse response using JSONbig
                        const parsedData = JSONbig.parse(data);
                        console.log(parsedData[0]);
                        setIsStaff(parsedData[0].is_staff);
                    })
                    .catch((error) => console.error("Error:", error));
            }
        )();
    }, [])



    /**
     * Fetching product 
     */
    const getProducts = () => {
        fetch('https://34.201.53.67:8000/grafts/', {})
        .then((response) => response.text()) // Get response as text
        .then((data) => {
            // Parse response using JSONbig
            const parsedData = JSONbig.parse(data);
            setProducts(parsedData);
        })
        .catch((error) => console.error("Error:", error));
    }
    useEffect(() => {
        getProducts();
    }, [products]); 




        return (
            <div className='bg-neutral-200 pb-20'>
                <h1 className='font-[Montserrat] text-3xl md:text-5xl font-regular text-center py-14'>Accept / Deny new Grafts</h1>
    
                {
                    products.map((product) => {
                        if(!product.validated) {
                            return  <GraftReviewComp
                            id = {product.id}
                            title = {product.name}
                            category = {product.category}
                            description = {product.description}
                            regulation = {product.regulation}
                            image = {product.image}
                            link = {product.purchase_link}
                            price = {product.price}
                            documents = {product.documents}
                            />
                        }

                    })
                    
                }
    
            </div>
        );
}
