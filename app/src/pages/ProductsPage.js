import React, { useState, useEffect } from 'react';
import ProductComp from '../components/ProductComp';




function ProductsPage() {


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
    }, []); 



    /**
     * Handling the dropdown menus to sort products
     */
    const [category, setCategory] = useState('');
    // const [regulation, setRegulation] = useState('');


    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    // const handleRegulationChange = (e) => {
    //     setRegulation(e.target.value);
    // };

    


    useEffect(() => {
        let filteredGrafts = products.filter(graft => graft.category === category );
        setProducts(filteredGrafts);
        console.log(filteredGrafts)
        console.log(category)
    }, [category]); 


    console.log(products);
    

    return (
        <>

            {/* SORT BY section */}
            <div className='flex items-center justify-center gap-5 m-5'>
                <select 
                    name="categories" 
                    id="categories" 
                    className='border-2 p-2 rounded-xl font-["Lato"]'
                    value={category} 
                    onChange={handleCategoryChange}
                > 
                    <option value="all" selected="selected">All Categories</option> 
                    <option value="1">Allograft</option> 
                    <option value="2">DBM (demineralized bone matrix)</option> 
                    <option value="3">Synthetics</option> 
                    <option value="4">Peptides</option> 
                    <option value="5">Proteins</option> 
                </select>

                {/* <select 
                    name="regulations" 
                    id="regulations" 
                    className='border-2 p-2 rounded-xl font-["Lato"]'
                    value={regulation}
                    onChange={handleRegulationChange}
                > 
                    <option value="all" selected="selected">All Regulatory Pathways</option> 
                    <option value="1">AATB</option> 
                    <option value="2">510(k)</option> 
                    <option value="2">Drug/Device Combination</option> 
                </select> */}


                
            </div>


            {/* Display Product List */}
            <div className='flex flex-wrap m-0 justify-center'> 

                {
                    products.map((product) => {

                        console.log("Product category: " + product.category)
                        
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