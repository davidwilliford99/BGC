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


  // console.log(image)


  /**
   * If a user deletes a graft 
   * 
   * - call DELETE to /grafts/id
   */
  const deleteGraft = async () => {
    
    const url = `https://api.bonegraftconsortium.com:8000/grafts/${id}`;
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

    <div className="m-3 md:mx-20 my-5 md:my-3 rounded-lg bg-white shadow-lg overflow-hidden">

      <div id="product-details" className="flex flex-col md:flex-row justify-between items-center">
          <img 
            src={image} 
            alt="product"
            className="w-72"/>

          <div>
            <h1 className="text-2xl my-2 font-semibold text-center">{title}</h1>
            <h1 className="text-sm text-blue-800 text-center">{category}</h1>
            <h1 className="text-sm text-blue-800 text-center">{regulation}</h1>
            <h1 className="text-sm mt-2 mx-5 font-semibold text-center">{description.slice(0,100)}...</h1>

            <div className="text-center my-5">
                <h3 className='text-2xl mb-2'>Pricing Options</h3>
                {
                    price && 
                    Object.entries(price).map(([key, value], index) => {
                        return (
                            <div key={index} className=''>
                                <span>{key}: </span>
                                <span>${value.toFixed(2)}</span>
                            </div>
                        )
                    })
                }
            </div>

            <a href={link}> <p className="text-blue-500 text-center mb-3">{link}</p></a>
          </div>


          <div className="flex flex-col items-center justify-center w-72 mb-5">
            <button onClick={deleteGraft} className="px-3 py-1 bg-red-500 md:mr-10 text-white font-semibold rounded-xl transition mt-2">Delete</button>
          </div>
          
      </div>



    </div>
    
  );
}
