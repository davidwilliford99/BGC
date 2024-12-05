import React, { useState, useEffect } from "react";


function ProductComp(props) {



  // props
  const id = props.id;
  const title = props.title;
  const categoryId = props.category;
  const description = props.description;
  const regulationId = props.regulation;
  const image = props.image;
  const link = "//" + props.link;
  const price = props.price;

  // logging for error handling
  // console.log(image);  
  console.log(price);


  /**
   * 
   * Add an API call to get the category using id
   * 
   */
  const [category, setCategory] = useState("");

    const getCategory = () => {
        fetch(`https://api.bonegraftconsortium.com:8000/grafts/` + categoryId + "/cat", {})
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
        fetch(`https://api.bonegraftconsortium.com:8000/grafts/` + regulationId + "/reg", {})
        .then((response) => response.json())
        .then((data) => setRegulation(data))
    }
    useEffect(() => {
        getRegulation();
        }, []); 


  return (

    <div className="mx-2 my-3 p-3 md:w-1/4 w-full bg-white rounded-sm shadow-md">

      <a href={"/grafts/" + id[0] + "" + id[1]} >

        <div id="product-details" className="m-2 flex flex-col">

            <div className="h-72 bg-blue-100 overflow-hidden">
              {image.map((img) => {
                  return <img src={img} className="object-cover h-full w-full" alt="product"/>
              })}  
            </div>

            <h1 className="text-xl my-3 font-semibold">{title}</h1>

            <div className="text-sm text-blue-800">
              <h1>{category}</h1>
              <h1>{regulation}</h1>
            </div>

            <h1 className="text-md mt-3 font-thin">{description.slice(0, 100)}...</h1>

            <div className="flex flex-col mt-3">
              {/* Pricing Options */}
              {Object.entries(price).map(([priceKey, priceValue]) => {
                return (
                  <p key={priceKey} className="font-semibold flex justify-between">
                    <p>{priceKey}:</p> 
                    <p>${priceValue}</p>
                  </p>
                );
              })}
              <a target="_blank" href={link}><button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition mt-4">Visit Manufacturer</button></a>
            </div>
            
        </div>
      </a>

    </div>
    
  );
}

export default ProductComp;