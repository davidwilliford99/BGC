import React, { useState, useEffect } from "react";

/**
 * 
 * Right now everything is hard coded. Once the API is setup,
 * we will be able to pass props. That way each product will be unique 
 * 
 */

function ProductComp(props) {



  // props
  const title = props.title;
  const categoryId = props.category;
  const description = props.description;
  const regulationId = props.regulation;


  

  /**
   * 
   * Add an API call to get the category using id
   * 
   */
  const [category, setCategory] = useState("");

    const getCategory = () => {
        fetch(`http://44.204.149.217:8000/grafts/` + categoryId + "/cat", {})
        .then((response) => response.json())
        .then((data) => setCategory(data))
    }
    useEffect(() => {
        getCategory();
        }, []); 




    /**
     * 
     * Add an API call to get the category using id
     * 
     */
    const [regulation, setRegulation] = useState("");

    const getRegulation = () => {
        fetch(`http://44.204.149.217:8000/grafts/` + regulationId + "/reg", {})
        .then((response) => response.json())
        .then((data) => setRegulation(data))
    }
    useEffect(() => {
        getRegulation();
        }, []); 





  return (

    <div className="mx-2 my-3 p-4 w-1/6 border-1 border-black rounded-sm">

      <a href="">

        <div id="product-details" className="m-2">
            <img src="https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/115/2021/08/What-are-the-Different-Types-of-Orthopedic-Doctors-768x512.jpg.webp" alt="product"/>
            <h1 className="text-xl my-2 font-semibold">{title}</h1>
            <h1 className="text-sm">{category}</h1>
            <h1 className="text-sm text-blue-800">{regulation}</h1>
            <h1 className="text-sm h-12 mt-2 font-semibold">{description}</h1>

            <div className="flex mt-5 items-center justify-between">
              <a href=""><button className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-800 transition">Purchase Here</button></a>
              <p className="font-semibold">$3500.00</p>
            </div>
            
        </div>

      </a>



    </div>
    
  );
}

export default ProductComp;