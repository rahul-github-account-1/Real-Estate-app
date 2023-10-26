import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// import {SliderWrap} from "./swiper.style";

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle';
// import 'swiper/swiper-bundle.css';


// console.log(error);

export default function Listing() {
SwiperCore.use([Navigation]);
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const params = useParams();

    console.log(listing);
    console.log(error);
    console.log(loading);

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

        {listing && !error && !loading &&
        (
            
                <div className="">
          <Swiper navigation>
            {listing.imageURLs.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className='h-[550px]'
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  
                ></div>
                {/* <img className='h-[550px]' src={url} alt="" /> */}
              </SwiperSlide>
            ))}
          </Swiper>              </div>

        )
          
        }

    </main>
  )
}
