import React, { useState, useEffect } from "react";

/**
 * 
 * Right now everything is hard coded. Once the API is setup,
 * we will be able to pass props. That way each product will be unique 
 * 
 */

export default function MyProductComp(props) {



  // props
  const title = props.title;
  const categoryId = props.category;
  const description = props.description;
  const regulationId = props.regulation;
  const image = props.image;
  const link = props.link;
  const price = props.price;
  const id = props.id



  /**
   * If a user deletes a graft 
   * 
   * - call DELETE to /grafts/id
   */
  const deleteGraft = async () => {
    
    const url = `http://54.174.140.152:8000/grafts/${id}`;
    const jwtToken = localStorage.getItem("jwt");
    const payload = {
      jwt: jwtToken 
    };

    const requestOptions = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    };


    const deleteRequest = await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    
    }



  /**
   * 
   * Add an API call to get the category using id
   * 
   */
  const [category, setCategory] = useState("");

    const getCategory = () => {
        fetch(`http://54.174.140.152:8000/grafts/` + categoryId + "/cat", {})
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
        fetch(`http://54.174.140.152:8000/grafts/` + regulationId + "/reg", {})
        .then((response) => response.json())
        .then((data) => setRegulation(data))
    }
    useEffect(() => {
        getRegulation();
        }, []); 





  return (

    <div className="mx-20 my-3 rounded-xl overflow-hidden border-1 border-black">

      <div id="product-details" className="flex justify-between items-center">
          <img 
            src={image} 
            alt="product"
            className="max-h-72"/>

          <div>
            <h1 className="text-2xl my-2 font-semibold text-center">{title}</h1>
            <h1 className="text-sm text-blue-800 text-center">{category}</h1>
            <h1 className="text-sm text-blue-800 text-center">{regulation}</h1>
            <h1 className="text-sm mt-2 mx-5 font-semibold text-center">{description}</h1>
            <p className="font-semibold text-center text-xl my-3">${price}</p>
            <a href={link}> <p className="text-blue-500 text-center mb-3">{link}</p></a>
          </div>


          <div className="flex flex-col items-center justify-center">
            <button onClick={deleteGraft} className="px-3 py-1 bg-red-500 mr-10 text-white font-semibold rounded-xl transition mt-2">Delete</button>
          </div>
          
      </div>



    </div>
    
  );
}
