import React from "react";

/**
 * 
 * Right now everything is hard coded. Once the API is setup,
 * we will be able to pass props. That way each product will be unique 
 * 
 */

function ProductComp(props) {



  // props
  const title = props.title;
  const category = props.category;
  const description = props.description;




  return (

    <div className="mx-2 w-1/6 bg-neutral-200 border">


        <div id="product-details" className="m-2">
            <img src="https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/115/2021/08/What-are-the-Different-Types-of-Orthopedic-Doctors-768x512.jpg.webp" alt="product"/>
            <h1 className="text-xl my-2">{title}</h1>
            <h1 className="text-sm">{category}</h1>
            <h1 className="text-sm">{description}</h1>
        </div>


    </div>
    
  );
}

export default ProductComp;