import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function CheckOut() {
    const {roomId} =useParams();
    const [roomDetails,setRoomDetails]=useState([]);
    const [hotelDetails,setHotelDetails]=useState([]);
   const Navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token');

        if(!token){
            Navigate('/login')
        }
        axios.get(`http://localhost:8080/userCheckOut/getRoom/${roomId}`,
        {
            headers: {
                Authorization: `Bearer ${token}` // Include token in request headers
            }
        })
        .then(response => {
            setRoomDetails(response.data);
            console.log(response.data);
            // Fetch hotel details based on the room
            axios.get(`http://localhost:8080/userCheckOut/getHotel/${response.data.hotelId}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Include token in request headers
                }
            })
            .then(response => setHotelDetails(response.data))
         
            .catch(error => console.error('Error fetching hotel details:', error));
        })
        .catch(error => console.error('Error fetching room details:', error));
    }, [roomId]);


  return (


    <div>
      <Navbar />

      <section className='bg-slate-100'>
        







      </section>
    <Footer/>















    </div>
  )
}

export default CheckOut;
