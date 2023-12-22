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
    const [sortedProducts, setSortedProducts] = useState([]);
    const [category, setCategory] = useState('all');

    const getProducts = () => {
        fetch('http://34.201.53.67:8000/grafts/', {})
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }
    useEffect(() => {
        getProducts();
    }, []); 



    /**
     * Handling the dropdown menu to sort products
     * via category
     */
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    useEffect(() => {
        console.log(category);
        if (category === 'all') {
          setSortedProducts(products);
        } else {
          setSortedProducts(products.filter((product) => product.category == category));
        }
      }, [products, category]);

    

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
                    <option value="915858180849696769">Allograft</option>
                    <option value="915858209190838273">DBM</option>
                    <option value="915858246617530369">Synthetics</option>
                    <option value="915858301744152577">Peptides</option>
                    <option value="915858330792951809">Proteins</option>
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
            <div className='flex flex-col md:flex-row flex-wrap m-0 justify-center'> 

                {
                    sortedProducts.map((product) => {

                        console.log(product.regulation)
                        
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