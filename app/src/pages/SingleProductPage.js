import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

    console.log(id)

    useEffect(() => {
    const fetchGraftData = async () => {
        try {
            const response = await axios.get(`http://34.201.53.67:8000/grafts/${id}`);
            setGraftData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };
    fetchGraftData();
    }, [id]);


    // let documents = graftData.documents
    // if (graftData.documents == null) {
    //     documents = [""];
    // }


    return (
        <div className='px-20'>
            <div className='flex flex-col lg:flex-row py-10'>
                <h1>{graftData.name}</h1>
                <img src={graftData.image}/>
            </div>


            <div>{graftData.description}</div>


            <div id="document buttons" className="flex flex-wrap items-center justify-center my-8 gap-3">
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

        </div>
    );
}
