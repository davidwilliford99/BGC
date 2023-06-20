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

    <div className="m-3 p-4 w-1/6 border-2 border-black rounded-xl">

      <a href="">

        <div id="product-details" className="m-2">
            <img src="https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/115/2021/08/What-are-the-Different-Types-of-Orthopedic-Doctors-768x512.jpg.webp" alt="product"/>
            <h1 className="text-xl my-2">{title}</h1>
            <h1 className="text-sm">{category}</h1>
            <h1 className="text-sm h-12">{description}</h1>

            <div className="flex mt-5 items-center justify-between">
              <a href=""><button className="bg-blue-500 text-white px-3 py-1 rounded-xl">Add to Cart</button></a>
              <p className="font-semibold">$3500.00</p>
            </div>
            
        </div>

      </a>



    </div>
    
  );
}

export default ProductComp;