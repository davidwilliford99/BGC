import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function NewGraftPage(props) {


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(0);
    const [regulation, setRegulation] = useState(0);
    const [image, setImage] = useState();
    const [price, setPrice] = useState();
    const [link, setLink] = useState("");
    const [documents, setDocuments] = useState([]);

    const [postedSuccesfully, setPostedSuccesfully] = useState(false);
    const [notLoggedIn, setNotLoggedIn] = useState(false);
    const [hasEnoughCredits, setHasEnoughCredits] = useState(true);
    const [duplicateName, setDuplicateName] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();



    /**
     * Function for adding new grafts 
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

        setIsLoading(true);

        if(isLoggedIn) {


            // Temporary variable for duplicate names
            let duplicateNameTemp = false;


            /**
             * API Request to return username 
             */
            const userUrl = "https://api.bonegraftconsortium.com:8000/users/info/";
            const jwtToken = localStorage.getItem("jwt");
            const userRequestData = {
                jwt: jwtToken
            };
            const userRequestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                    body: JSON.stringify(userRequestData),
            };
            await fetch(userUrl, userRequestOptions)
                .then((response) => response.json())
                .then(async (data) => {
                    

                    if(data[1].num_credits > 0) {

                        /**
                         * API Request to store graft 
                         */
                        const graftUrl = "https://api.bonegraftconsortium.com:8000/grafts/";
                        const graftRequestData = {
                            name: name,
                            description: description,
                            category: category,
                            regulation: regulation,
                            image: null,
                            price: price,
                            purchase_link: link,
                            created_by: data[0].username,
                            documents: null,
                            validated: false
                        };
                        const graftRequestOptions = {
                            method: "POST",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify(graftRequestData),
                        };
                        await fetch(graftUrl, graftRequestOptions)
                            .then((response) => response.json())
                            .then(async (data) => {



                                /**
                                 * Checking if graft name is duplicate 
                                 * 
                                 * This isn't the most specific at the moment, but due to the limitations of the form,
                                 * It shouldnt let users send invalid form data unless there is a duplicate name
                                 */
                                if (data.message === "Invalid payload") {
                                    setDuplicateName(true);
                                    duplicateNameTemp = true;
                                }



                                /**
                                 * Third API call to store product image
                                 * 
                                 * Uses fromdata instead of JSON so may look different than the others 
                                 */
                                const imageFormData = new FormData();
                                
                                imageFormData.append('graft_name', data.name);
                                imageFormData.append('image', image);

                                // logging the graft id and image url for testing
                                console.log(data.name);
                                console.log(image)

                                const imageResponse = await fetch('https://api.bonegraftconsortium.com:8000/grafts/imageupload', {
                                    method: 'POST',
                                    body: imageFormData,
                                  });


                                
                                /**
                                 * Fourth API request to store product documents
                                 * 
                                 * Documents are stored in an array, and you cannot send an array of files 
                                 */
                                const documentFormData = new FormData();
                                documentFormData.append('graft_name', data.name)

                                // logging documents fro debugging 
                                console.log(documents);

                                for(let i = 0; i < documents.length; i++) {
                                    documentFormData.append('document', documents[i]);
                                }

                                const documentResponse = await fetch('https://api.bonegraftconsortium.com:8000/grafts/documentupload', {
                                    method: 'POST',
                                    body: documentFormData,
                                  });




                            })
                            .catch((error) => console.error("Error:", error));


                        

                        
                        /**
                         * Fifth API call to decrease user's credits by 1
                         */
                        const decreaseUrl = "https://api.bonegraftconsortium.com:8000/users/postgraft/";
                        const decreaseRequestData = {
                            jwt: jwtToken
                        };
                        const decreaseRequestOptions = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                                body: JSON.stringify(decreaseRequestData),
                        };
                        await fetch(decreaseUrl, decreaseRequestOptions)
                            .then((response) => response.json())
                            .then((data) => console.log(data))
                            .catch((error) => console.error("Error:", error));


                        /**
                         * Succesfult graft submission !!!
                         * Will automatically navigate after as well
                         */
                        if(!duplicateNameTemp) {
                            setPostedSuccesfully(true);
                            setTimeout(() => navigate("/myaccount"), 2000);
                        }

                    }
                    else {
                        setHasEnoughCredits(false);
                    }

                })
                .catch((error) => console.error("Error:", error));

        }

        else {
            setNotLoggedIn(true);
        }

        setIsLoading(false);
    }

    

    /**
     * Checks if a user is logged in
     * Users that are not logged in can not post grafts
     */
    const isLoggedIn = () => {
        const jwtToken = localStorage.getItem("jwt");
        if(jwtToken !== null) {
            return true;
        }
        else {
            return false;
        }
    }




    return (


        <div className='font-[Lato] bg-neutral-100'>
            
            <form id='create-account-form' className='p-5 w-full flex flex-col items-center' onSubmit={submitGraft}>

                <h1 className='text-center text-4xl mb-5 font-bold'>Add a New Product</h1>




                { postedSuccesfully && 
                    <h1
                        className='p-3 mb-4 rounded-xl bg-green-300 font-semibold'
                        >
                            Product Posted Successfully! You will now be redirected back to your account page
                    </h1>
                }

                { notLoggedIn && 
                    <h1
                        className='p-3 mb-4 rounded-xl bg-red-300 font-semibold'
                        >
                            Please log in to submit grafts !
                    </h1>
                }


                { !hasEnoughCredits && 
                    <h1
                        className='p-3 mb-4 rounded-xl bg-red-300 font-semibold'
                        >
                            You do not have any credits to post items. Please purchase credits on the Pricing page
                    </h1>
                }

                { duplicateName && 
                    <h1
                        className='p-3 mb-4 rounded-xl bg-red-300 font-semibold'
                        >
                            There is already a graft with this name !
                    </h1>
                }



                <div className='flex justify-center mb-3 w-full'>
                    <input 
                        required 
                        placeholder="Product Name"
                        type='text' 
                        className='border-1 border-black rounded-md p-2 w-1/3 ml-5'
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
                        className='border-1 border-black rounded-md p-2 w-1/3 ml-5'
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                        ></textarea>
                </div>


                <div className='flex justify-center mb-3 w-full'>
                    <select 
                        required 
                        placeholder="Select Category"
                        className='border-1 border-black rounded-md p-2 w-1/3 ml-5'
                        value = {category}
                        onChange = {(e) => setCategory(e.target.value)}
                        >
                            {/* The values are IDs of the categories from the db (auto generated) */}
                            <option value="placeholder">Select Category</option>
                            <option value="915858180849696769">Allograft</option>
                            <option value="915858209190838273">DBM</option>
                            <option value="915858246617530369">Synthetics</option>
                            <option value="915858301744152577">Peptides</option>
                            <option value="915858330792951809">Proteins</option>
                            <option value="977331099118534657">Cell Based Matrices</option>
                        </select>
                </div>

                <div className='flex justify-center mb-3 w-full'>
                    <select 
                        required 
                        placeholder="Select Regulation PAthway"
                        className='border-1 border-black rounded-md p-2 w-1/3 ml-5'
                        value = {regulation}
                        onChange = {(e) => setRegulation(e.target.value)}
                        >
                            {/* The values are IDs of the regulation pathways from the db (auto generated) */}
                            <option value="placeholder">Select Regulation Pathway</option>
                            <option value="915858365070901249">AATB</option>
                            <option value="915858416631250945">510(k)</option>
                            <option value="915858457363611649">Drug/Device Combination</option>

                        </select>
                </div>

                <div className='flex justify-center mb-3 w-full'>
                    <input 
                        required 
                        type='text'
                        placeholder="Link to product (where customers can buy)"
                        className='border-1 border-black rounded-md p-2 w-1/3 ml-5'
                        value = {link}
                        onChange = {(e) => setLink(e.target.value)}
                        ></input>
                </div>

                <div className='flex justify-center mb-3 w-full items-center' >
                    <p>$</p>
                    <input 
                        required 
                        placeholder="Price (in USD)"
                        type='number' 
                        className='border-1 border-black rounded-md p-2 w-1/3 ml-1'
                        value = {price}
                        onChange = {(e) => setPrice(e.target.value)}
                    ></input>
                </div>


                <div id='file-uploads' className='flex gap-14'>

                    <div className='flex flex-col items-center mt-5 w-full bg-blue-100 rounded-lg p-2'>
                        <p className='font-semibold'>Upload an image for your product</p>
                        <input 
                            type="file" 
                            accept="image/*" 
                            name="image" 
                            className="my-4"
                            required
                            onChange={(e) => {
                                const image = e.target.files;
                                setImage(image[0]);
                                console.log(image[0])
                            }} />
                    </div>


                    {/* Notice the difference in the function when adding multiple files to an array */}
                    <div className='flex flex-col items-center mt-5 w-full bg-blue-100 rounded-lg p-2'>
                        <p className='font-semibold'>Documents (can add multiple files):</p>
                        
                        <input 
                            type="file" 
                            multiple 
                            required
                            name="documents" 
                            className="my-4"  
                            onChange={(e) => {
                                const fileList = e.target.files;
                                setDocuments(Array.from(fileList));
                            }} />
                        
                        <p className='font-semibold'>PLEASE INCLUDE ...</p>
                        <p className='font-normal'>Approvals</p>
                        <p className='font-normal pb-2'>Studies</p>
                    </div>

                </div>


                { isLoading && 
                    <>
                        <img src={require("./../images/loading.gif")} className='h-20 mt-10 mb-5'/>
                        <button 
                        className='bg-neutral-600 mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
                        >
                            Submit Product
                        </button>
                    </>
                }



                <div className='flex flex-col items-center justify-center mt-5'>
                    <p className='text-center font-bold'>To prevent spam and security risk, your product<br/>will be reviewed professionally before showing on the repository</p>
                    <a>
                        { !isLoading && 
                        <>
                            <button 
                                type='submit'
                                className='bg-blue-600 mt-4 text-white text-xl font-semibold px-5 py-2 rounded-xl'
                            >
                                Submit Product
                            </button>
                        </>
                        }
                    </a>
                </div>

            </form>

        </div>
    );
}

