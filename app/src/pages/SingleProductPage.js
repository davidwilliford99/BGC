import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import JSONbig from 'json-bigint';

/**
 * 
 * Display info on single product
 * 
 * 1. Pull id from url 
 * 2. Get info from grafts/<id>
 * 3. Display info on page
 * 
 */

export default function SingleProductPage(props) {

    const { id } = useParams(); // This extracts the "id" parameter from the URL
    const [graftData, setGraftData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("");
    const [regulation, setRegulation] = useState("");


    console.log(id)

    useEffect(() => {
        const fetchGraftData = () => {
            fetch(`https://api.bonegraftconsortium.com:8000/grafts/${id}`, {})
            .then(response => response.text()) // Get the response as text
            .then(text => JSONbig.parse(text)) // Parse the text with JSONbig
            .then(data => {
                setGraftData(data);
                console.log("Graft data: ", graftData);

                const catId = data.category.c[0] + "" + data.category.c[1];
                fetch(`https://api.bonegraftconsortium.com:8000/grafts/${catId}/cat`, {})
                .then(response => response.text()) // Get the response as text
                .then(data => {
                    setCategory(data.replace(/['"]+/g, ''));
                })

                const regId = data.regulation.c[0] + "" + data.regulation.c[1];
                fetch(`https://api.bonegraftconsortium.com:8000/grafts/${regId}/reg`, {})
                .then(response => response.text()) // Get the response as text
                .then(data => {
                    setRegulation(data.replace(/['"]+/g, ''));
                })


                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching graft data:', error);
                setError(error);
                setLoading(false);
            });
        };
        fetchGraftData();
    }, [id]);



    if (!loading) {
        return (
            <div className='px-20 font-[Lato]'>
    
                <div className='flex flex-col pt-10'>
                    {graftData && <h1 className='text-3xl font-semibold font-[Lato] mb-3'>{graftData.name}</h1>}
                    
                    <div className="flex gap-2 overflow-hidden">
                        {graftData.image?.map((img, index) =>
                            img ? (
                                <img key={index} src={img} className="h-60" alt="product" />
                            ) : null
                        )}
                    </div>
    
                    <div className='mt-3 text-md text-blue-800'>
                        {graftData && <h1>{category}</h1>}
                        {graftData && <h1>{regulation}</h1>}
                    </div>
    
                </div>
    
    
                {graftData && <div className='mt-3 text-lg'>{graftData.description}</div>}
    
                {graftData && Array.isArray(graftData.documents) &&
                <div id="document buttons" className="flex flex-wrap items-center my-10 gap-3">
                  {
                    graftData.documents.map((docLink, index) => { 
                      return <a 
                          href={docLink} 
                          target="_blank"
                          >
                          <button 
                            className="px-3 py-1 bg-neutral-500 mr-10 text-white font-semibold rounded-xl transition mt-2 w-full">
                              Document {index + 1}
                          </button>
                          
                        </a>
                    })
                  }
                </div>
                }


                <div>
                    <h3 className='text-2xl font-bold mb-2'>Pricing Options</h3>
                    {
                        graftData.price && 
                        Object.entries(graftData.price).map(([key, value], index) => {
                            return (
                                <div key={index} className='w-48 flex justify-between'>
                                    <span>{key}: </span>
                                    <span>${value.toFixed(2)}</span>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}
