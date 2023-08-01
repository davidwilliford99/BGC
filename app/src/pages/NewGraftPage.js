import React from 'react';
import { useState } from 'react';

export default function NewGraftPage(props) {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(0);
    const [regulation, setRegulation] = useState(0);
    const [image, setImage] = useState();
    const [price, setPrice] = useState(0);
    const[link, setLink] = useState("");
    const[documents, setDocuments] = useState([]);



    /**
     * This is the page for adding new grafts 
     * 
     * 
     * Requirements
     * ------------------------------
     * Users must be signed in to submit products
     * Users must have > 0 credits to post a product
     * API must be called using jwt (localstorage) to get username to add to POST request 
     * Image is sent in seperate request (as form-data) to S3 bucket 
     * 
     * isSignedIn method will check fro jwtToken and return true or false 
     * 
     */

    const submitGraft = async (event) => {

        event.preventDefault();

        console.log(documents);
        console.log(category);
        console.log(regulation);
        console.log(image);

    }


    return (


        <div>
            
            <form id='create-account-form' className='p-5 w-full flex flex-col items-center' onSubmit={submitGraft}>

                <h1 className='text-center text-4xl mb-5 font-bold'>Add a New Product</h1>


                {/* Conditionally Rendering Error Messages */}
                <div id="error messages">
                    {/* {emailTaken ? <p className="text-red-500 text-center mb-2">The email you entered is already in use</p> : null}
                    {usernameTaken ? <p className="text-red-500 text-center mb-2">The username you entered is not available</p> : null}
                    {!passwordMatch ? <p className="text-red-500 text-center mb-2">Passwords do not match!</p> : null} */}
                </div>


                <div className='flex justify-center mb-3 w-full'>
                    <input 
                        required 
                        placeholder="Product Name"
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-1/3 ml-5'
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-center mb-3 w-full'>
                    <textarea 
                        required 
                        rows="4"
                        placeholder="Product description"
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-1/3 ml-5'
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                        ></textarea>
                </div>


                <div className='flex justify-center mb-3 w-full'>
                    <select 
                        required 
                        placeholder="Select Category"
                        className='border-1 border-black rounded-md px-1 w-1/3 ml-5'
                        value = {category}
                        onChange = {(e) => setCategory(e.target.value)}
                        >
                            <option value="placeholder">Select Category</option>
                            <option value="1">Allograft</option>
                            <option value="2">DBM</option>
                            <option value="3">Synthetics</option>
                            <option value="4">Peptides</option>
                            <option value="5">Proteins</option>
                        </select>
                </div>

                <div className='flex justify-center mb-3 w-full'>
                    <select 
                        required 
                        placeholder="Select Regulation PAthway"
                        className='border-1 border-black rounded-md px-1 w-1/3 ml-5'
                        value = {regulation}
                        onChange = {(e) => setRegulation(e.target.value)}
                        >
                            <option value="placeholder">Select Regulation Pathway</option>
                            <option value="1">AATB</option>
                            <option value="2">501(k)</option>
                            <option value="3">Drug/Device Combination</option>

                        </select>
                </div>

                <div className='flex justify-center mb-3 w-full'>
                    <input 
                        required 
                        placeholder="Link to product (where customers can buy)"
                        className='border-1 border-black rounded-md px-1 w-1/3 ml-5'
                        value = {link}
                        onChange = {(e) => setLink(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-center mb-3 w-full' >
                    <p>$</p>
                    <input 
                        required 
                        placeholder="Price (in USD)"
                        type='text' 
                        className='border-1 border-black rounded-md px-1 w-1/3 ml-1'
                        value = {price}
                        onChange = {(e) => setPrice(e.target.value)}
                    ></input>
                </div>


                <div id='file-uploads' className='flex gap-14'>

                    <div className='flex flex-col items-center mt-5 w-full bg-neutral-100 rounded-lg p-2'>
                        <p className='font-semibold'>Upload an image for your product</p>
                        <input type="file" accept="image/*" name="image" className="my-4" 
                            onChange={(e) => {
                                const image = e.target.files;
                                setImage(image[0]);
                            }} />
                    </div>


                    {/* Notice the difference in the function when adding multiple files to an array */}
                    <div className='flex flex-col items-center mt-5 w-full bg-neutral-100 rounded-lg p-2'>
                        <p className='font-semibold'>Documents (can add multiple files):</p>
                        <input type="file" multiple name="documents" className="my-4"  
                            onChange={(e) => {
                                const fileList = e.target.files;
                                setDocuments(Array.from(fileList));
                            }} />
                    </div>

                </div>



                <div className='flex flex-col items-center justify-center mt-5'>
                    <p className='text-center font-bold'>To prevent spam and security risk, your product<br/>will be reviewed professionally before showing on the repository</p>
                    <a>
                        <button 
                            type="submit"
                            className='bg-blue-600 mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
                            >
                                Submit Product
                        </button>
                    </a>
                </div>

            </form>

        </div>
    );
}

