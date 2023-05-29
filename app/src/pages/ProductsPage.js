import React, { useState, useEffect } from 'react';
import ProductComp from '../components/ProductComp';





function ProductsPage() {



    /**
     * 
     * Fetching product list from api
     * Endpoint for all products : localhost:8000/grafts/
     * 
     */
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(`http://localhost:8000/grafts/`, {})
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    useEffect(() => {
        getProducts();
        }, []); 


    return (
        <>
            {/* SORT BY section */}
            <div className='flex items-center justify-center gap-5 my-5'>
                <h1 className=''>Sort By:</h1>

                <select name="dog-names" id="dog-names" className='border'> 
                    <option value="all" selected="selected">All Categories</option> 
                    <option value="donor">Allograft</option> 
                    <option value="dbm">DBM (demineralized bone matrix)</option> 
                    <option value="synthetics">Synthetics</option> 
                    <option value="peptides">Peptides</option> 
                    <option value="proteins">Proteins</option> 
                </select>

                <select name="dog-names" id="dog-names" className='border'> 
                    <option value="all" selected="selected">All Regulatory Pathways</option> 
                    <option value="aatb">AATB</option> 
                    <option value="501(k)">510(k)</option> 
                    <option value="drug/device">Drug/Device Combination</option> 
                </select>
                
            </div>


            {/* Product List */}
            <div className='flex flex-wrap mx-20'> 

                {
                    products.map((product) => {
                        return  <ProductComp 
                                    title = {product.name}
                                    category = {product.category}
                                    description = {product.description}
                                />
                    })
                    
                }


            </div>
        
        </>
    );
}

export default ProductsPage;