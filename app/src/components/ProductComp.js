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
  const image = props.image;
  const link = props.link;
  const price = props.price;


  

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

    <div className="mx-2 my-3 p-4 w-1/3 rounded-sm">

      <a href="">

        <div id="product-details" className="m-2">
            <img src="https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/115/2021/08/What-are-the-Different-Types-of-Orthopedic-Doctors-768x512.jpg.webp" alt="product"/>
            <h1 className="text-xl my-2 font-semibold text-center">{title}</h1>
            <h1 className="text-sm text-center">{category}</h1>
            <h1 className="text-sm text-blue-800 text-center">{regulation}</h1>
            <h1 className="text-sm mt-2 font-semibold text-center">{description}</h1>

            <div className="flex flex-col mt-5 items-center justify-between">
              <p className="font-semibold">${price}</p>
              <a target="_blank" href={link}><button className="bg-blue-500 text-white px-3 py-1 rounded-xl hover:bg-blue-800 transition mt-2">Purchase Here</button></a>
            </div>
            
        </div>

      </a>



    </div>
    
  );
}

export default ProductComp;