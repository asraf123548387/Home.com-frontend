import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

import axios from 'axios';
import Footer from './Footer';
function UserHotelList() {
    const{hotelId}=useParams();
    console.log(hotelId)

    const[hotel,setHotel]=useState([]);
    console.log(hotel)
   
    useEffect(() => {
      const fetchAllHotel = async () => {
        try {
          
        
    
          const response = await axios.get('http://localhost:8080/user/hotelList');
    
          if (response.status >= 200 && response.status < 300) {
            setHotel(response.data);
            console.log(response.data);
          } else {
            console.error('Failed to fetch hotels:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching hotels:', error.message);
        }
      };
    
      fetchAllHotel();
    }, []);
   
 // Find the hotel with the matching hotelId
 const selectedHotel = hotel.find(hotelItem => hotelItem.hotelId === parseInt(hotelId));

console.log(selectedHotel)

// Filter out the selected hotel from the hotel array
const remainingHotels = hotel.filter(hotelItem => hotelItem.id !== parseInt(hotelId));

// Construct the sortedHotel array by placing the selected hotel at the beginning
const sortedHotel = selectedHotel ? [selectedHotel, ...remainingHotels] : hotel;


  return (
    <div className='bg-zinc-100'>
      <Navbar/>

         <section className='flex'>
            <div className='w-1/12'>

            </div>
                    
            <div className='w-10/12 mt-2'>
             <form className="h-16 p-1 bg-yellow-500 rounded-lg shadow justify-center items-start gap-1">
                <input className="grow shrink basis-0 self-stretch px-2 py-2 bg-white rounded justify-center items-center w-4/12 h-14 border border-gray-300" placeholder='Enter your destination'/>

                <input className="grow shrink basis-0 self-stretch px-2 py-2 bg-white rounded justify-center items-center w-4/12 h-14 border border-gray-300" type='date'/>

                <input className="grow shrink basis-0 self-stretch px-2 py-2 bg-white rounded justify-center items-center w-3/12 h-14 border border-gray-300"/>

                <button className="pt-3 px-2 pb-3 bg-blue-700 text-white rounded md:mt-0 w-1/12">
                    Search
                </button>
            </form>
           </div>


        </section>






<section className='flex'>
        <div className='w-3/12'>
            



        </div>
  
         
    <div className="max-w-screen-lg flex-col  mt-4">
    {sortedHotel.map((hotelItem, index) => (
        <Link to={`/hotelViewPage/${hotelItem.hotelId}`} key={index} style={{ textDecoration: 'none' }}>
            <div className={`flex w-full md:w-4/6 h-48 relative rounded-2xl border border-black-200 mb-2 ${index === 0 ? 'bg-blue-100' : 'bg-white'}`}>
                <img src={hotelItem.images} alt={`Hotel ${hotelItem.id}`} className="h-48 rounded-tl-2xl rounded-bl-2xl w-48" />
                <div className="flex flex-col justify-center ml-2 w-full">
                   <div> <h5 className='text-blue-600 font-serif'>{hotelItem.hotelName}</h5></div>
                    <div>{hotelItem.location}</div>
                    <div className='text-black'>{hotelItem.address}</div>
                    <div className='flex justify-end'>{hotelItem.price}</div>
                </div>
            </div>
        </Link>
    ))}
   </div>
 </section>
<Footer/>
    </div>
  )
}

export default UserHotelList
