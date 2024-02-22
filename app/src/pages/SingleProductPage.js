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

    console.log(graftData)

    return (
        <div className='px-20'>
            <div className='flex flex-col lg:flex-row py-10'>
                <h1>Product Title</h1>
                <img src=''/>
            </div>

            <div>Description</div>

            <div className='py-10'>
                <a>Document</a>
                <a>Document</a>
                <a>Document</a>
            </div>

        </div>
    );
}
