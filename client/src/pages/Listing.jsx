import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// console.log(error);

export default function Listing() {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();

    // console.log(listing);

    useEffect(() =>{
        const fetchListing =async () =>{
            
            try {
                setLoading(true);
                setError(false);
                setListing(null);

                const listingId = params.listingId;
                // console.log(listingId);;
    
                const res = await fetch(`/api/listing/get/${listingId}`);
    
                const data = await res.json();
    
                if(data.success == false){
                    console.log(data.message);
                    setError(data.message);
                    setLoading(false);
                    return;
                }

                setLoading(false);
                setListing(data);
                setError(false);
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }

            // console.log(data);

            // setFormData(data);  
        }

        fetchListing();
    }, [params.listingId]) // means when listinId is changed this useEffect will execute.
  return (
    <main>
        {loading && <p className= 'text-center my-4 text-2xl'>loading...</p>}
        {error && <p className= 'text-center text-red-500 my-4 text-2xl'>error Happened:   {error}</p>}

        {listing && 
            <div>

                {listing.name}
            </div>
        }

    </main>
  )
}
