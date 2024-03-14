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
  console.log(image);  
  console.log(link);

  /**
   * 
   * Add an API call to get the category using id
   * 
   */
  const [category, setCategory] = useState("");
  const [imageString, setImageString] = useState("");

    const getCategory = () => {
        fetch(`http://34.201.53.67:8000/grafts/` + categoryId + "/cat", {})
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
        fetch(`http://34.201.53.67:8000/grafts/` + regulationId + "/reg", {})
        .then((response) => response.json())
        .then((data) => setRegulation(data))
    }
    useEffect(() => {
        getRegulation();
        }, []); 


  console.log(id[0] + "" + id[1])

  return (

    <div className="mx-2 my-3 p-4 md:w-1/4 w-full bg-white rounded-sm shadow-lg">

      <a href={"/grafts/" + id[0] + "" + id[1]} >

        <div id="product-details" className="m-2 flex flex-col items-center">
            <img src={image} className="max-h-96" alt="product"/>
            <h1 className="text-xl my-2 font-semibold text-center">{title}</h1>
            <h1 className="text-sm text-center">{category}</h1>
            <h1 className="text-sm text-blue-800 text-center">{regulation}</h1>
            <h1 className="text-sm mt-2 font-semibold text-center">{description}</h1>

            <div className="flex flex-col mt-5 items-center justify-between">
              <p className="font-semibold">${price}</p>
              <a target="_blank" href={link}><button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition mt-3">Purchase Here</button></a>
            </div>
            
        </div>

      </a>



    </div>
    
  );
}

export default ProductComp;