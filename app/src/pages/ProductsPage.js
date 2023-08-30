import React, { useState, useEffect } from 'react';
import ProductComp from '../components/ProductComp';




function ProductsPage() {


    /**
     * Handling the dropdown menus to sort products
     */
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedRegulation, setSelectedRegulation] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
      };
    const handleRegulationChange = event => {
        setSelectedRegulation(event.target.value);
    }




    /**
     * 
     * Fetching product list from api
     * Endpoint for all products : 
     * 
     */
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch('http://54.174.140.152:8000/grafts/', {})
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    useEffect(() => {
        getProducts();
        setFilteredProducts(products)
        }, []); 

    

    return (
        <>

            {/* SORT BY section */}
            <div className='flex items-center justify-center gap-5 m-5'>
                <select 
                    name="categories" 
                    id="categories" 
                    className='border-2 p-2 rounded-xl font-["Lato"]'
                    value={selectedCategory} 
                    onChange={handleCategoryChange}
                > 
                    <option value="all" selected="selected">All Categories</option> 
                    <option value="1">Allograft</option> 
                    <option value="2">DBM (demineralized bone matrix)</option> 
                    <option value="3">Synthetics</option> 
                    <option value="4">Peptides</option> 
                    <option value="5">Proteins</option> 
                </select>

                <select 
                    name="regulations" 
                    id="regulations" 
                    className='border-2 p-2 rounded-xl font-["Lato"]'
                    value={selectedRegulation}
                    onChange={handleRegulationChange}
                > 
                    <option value="all" selected="selected">All Regulatory Pathways</option> 
                    <option value="1">AATB</option> 
                    <option value="2">510(k)</option> 
                    <option value="2">Drug/Device Combination</option> 
                </select>


                
            </div>


            {/* Display Product List */}
            <div className='flex flex-wrap m-0 justify-center'> 

                {
                    filteredProducts.map((product) => {
                        
                                return  <ProductComp 
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
        
        </>
    );
}

export default ProductsPage;