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
            fetch(`https://34.201.53.67:8000/grafts/${id}`, {})
            .then(response => response.text()) // Get the response as text
            .then(text => JSONbig.parse(text)) // Parse the text with JSONbig
            .then(data => {
                setGraftData(data);

                const catId = data.category.c[0] + "" + data.category.c[1];
                fetch(`https://34.201.53.67:8000/grafts/${catId}/cat`, {})
                .then(response => response.text()) // Get the response as text
                .then(data => {
                    setCategory(data.replace(/['"]+/g, ''));
                })

                const regId = data.regulation.c[0] + "" + data.regulation.c[1];
                fetch(`https://34.201.53.67:8000/grafts/${regId}/reg`, {})
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



    return (
        <div className='px-20 font-[Lato]'>
            <div className='flex flex-col py-10'>
                {graftData && <h1 className='text-3xl font-semibold font-[Lato]'>{graftData.name}</h1>}
                {graftData && <img className='w-1/3 mt-5 rounded-md' src={graftData.image}/>}
                {graftData && <h1 className='text-xl'>{category}</h1>}
                {graftData && <h1 className='text-xl'>{regulation}</h1>}
            </div>


            {graftData && <div>{graftData.description}</div>}

            {graftData && Array.isArray(graftData.documents) &&
            <div id="document buttons" className="flex flex-wrap items-center my-8 gap-3">
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
        </div>
    );
}
