import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faUser,faBed,faCar,faPersonSwimming ,faBanSmoking,faDumbbell, faLock} from '@fortawesome/free-solid-svg-icons';
function CheckOut() {
    const {roomId} =useParams();
    const [roomDetails,setRoomDetails]=useState([]);
    const [hotelDetails,setHotelDetails]=useState([]);
    const today =new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const formattedToday = today.toISOString().substr(0, 10);
    const formattedTomorrow = tomorrow.toISOString().substr(0, 10);

    const userName=localStorage.getItem('userName');
   const Navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token');

        if(!token){
            Navigate('/login')
            Swal.fire("please sign In !");
        }else{
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
}}, [roomId]);


  return (


    <div>
      <Navbar />

      <section className='bg-slate-100'>
        <div className='pl-10 text-3xl font-semibold pt-3'>
          {hotelDetails.hotelName}
          
        </div>
        <div className='flex w-full'> 
            <div className='w-4/6 '>
                <div className='bg-white  my-4 ml-5 border border-gray-400 rounded-md h-16 '>
                    <div className='mt-3 pl-5 font-semibold text-2xl'>
                      <span><FontAwesomeIcon icon={faMoon}  className='w-12 h-10'/> Welcome, {userName}</span> 
                    </div>
                </div>

               <div className='bg-white  mt-4 ml-5 rounded-lg h-auto border border-gray-400'>
                    <div className='pl-5 py-3  flex'>
                                <div >
                                <FontAwesomeIcon icon={faUser}  className='w-7 h-7'/>
                                </div>
                                <div className='pl-4 font-semibold text-2xl '>
                                    Step 1 : Your Details
                                </div>
                                
                    </div>
                    <hr></hr>
                    <div className='pl-5  text-base'>
                         Please tell us the name of the guest staying at the hotel as it appears on the ID that they’ll present at check-in. If the guest has more than one last name, please enter them all.
                        
                    </div>
                    
                    <div className='pt-3'>
                        <form>
                          <div className='pl-5'>
                            <label className='font-bold text-lg'>Your name *</label>
                            <p className='text-lg font-thin'>Please give us the name of one of the people staying in this room.</p>
                            <input type='text' className='border border-black w-3/6 h-10'></input>
                          </div>
                        
                          <div className='pl-5 mt-4'>
                            <label className='font-bold text-lg'>Email * :</label>
                            <p className='text-lg font-thin'>Your confirmation email goes here.</p>
                            <input type='text' className='border border-black w-3/6 h-10'></input>
                          </div>
                          <div className='pl-5 mt-4 mb-3'>
                            <label className='font-bold text-lg'>Mobile Number * :</label>
                            <p className='text-lg font-thin'>Please provide your contact phone number.</p>
                            <input type='text' className='border border-black w-3/6 h-10'></input>
                          </div>
                        </form>


                    </div>


               </div>


               <div className='bg-white  mt-4 ml-5 rounded-lg h-auto border border-gray-400'>
                   <div className='pl-5 py-3  flex'>
                                <div >
                                <FontAwesomeIcon icon={faBed} className='w-7 h-7'/>
                                </div>
                                <div className='pl-4 font-semibold text-2xl '>
                                    Step 2 : Room Details
                                </div>
                                
                    </div>
                    <hr>
                    </hr>
                   <div className='pl-5'>
                      <div className=' text-lg font-bold'>
                        Property Highlight
                      </div>
                      <div className='mt-2 flex justify-between pr-4'>
                          <span ><FontAwesomeIcon icon={faCar} className='pr-2'/> Free CarParking</span> 
                          <span className='pl-5'><FontAwesomeIcon icon={faPersonSwimming} className='pr-2'/> Swimming pool</span> 
                          <span className='pl-5'><FontAwesomeIcon icon={faBanSmoking}  className='pr-2'/>No Smoking  </span> 
                          <span className='pl-5'><FontAwesomeIcon icon={faDumbbell}   className='pr-2'/>Gym  </span> 
                      </div>
                       <div className='mt-4 font-bold'>
                        ROOM TYPE:{roomDetails.roomType}
                       </div>
                       <div className='mt-4 font-bold mb-5'>
                        Room price: ₹ {roomDetails.pricePerNight}
                       </div>




                   </div>


               </div>
               <div className='bg-white  mt-4 ml-5 rounded-lg h-auto border border-gray-400'>
                   <div className='pl-5 py-3  flex'>
                                <div >
                                <FontAwesomeIcon icon={faLock} className='w-7 h-7'/>
                                </div>
                                <div className='pl-4 font-semibold text-2xl '>
                                    Step 3 : Payment
                                </div>
                                
                    </div>
                    <hr>
                    </hr>
                    <div className='pl-5'>
                            <div className='flex items-center mb-2'>
                                <input type='radio' id='stripe' name='paymentMethod' value='stripe' className='mr-2 cursor-pointer' />
                                <label htmlFor='stripe' className='cursor-pointer'>Stripe</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type='radio' id='paypal' name='paymentMethod' value='paypal' className='mr-2 cursor-pointer' />
                                <label htmlFor='paypal' className='cursor-pointer'>PayPal</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type='radio' id='razorpay' name='paymentMethod' value='razorpay' className='mr-2 cursor-pointer' />
                                <label htmlFor='razorpay' className='cursor-pointer'>Razorpay</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type='radio' id='payAtProperty' name='paymentMethod' value='payAtProperty' className='mr-2 cursor-pointer' />
                                <label htmlFor='payAtProperty' className='cursor-pointer'>Pay at Property</label>
                            </div>
                        </div>

               </div>


            </div>
          




            <div className='w-2/6'>
               <div>
                   <div className='h-auto bg-white mx-3 p-2 rounded-lg'>
                      <div className='p-2 bg-slate-200 rounded-lg'>
                        <div>
                          <img src={hotelDetails.images} className='w-full rounded-lg'/>
                        </div>
                        <div className='pt-3 font-semibold text-xl'>
                          {hotelDetails.hotelName}
                        </div>
                        <div className='pt-2 font-medium '>
                            {hotelDetails.address}
                        </div>
                        <div>
                            reviews  space
                        </div>
                         <div className='bg-white p-3 rounded-lg'>
                         <div className='text-lg font-bold flex justify-between'>
                              <div className='w-1/2'>
                                  <label className='w-full'>Check In date:</label>
                              </div>
                              <div className='w-1/2'>
                                <span>  <input className='w-full' defaultValue={formattedToday} readOnly />12 pm</span>
                              </div>
                          </div>
                          <div className='text-lg font-bold flex justify-between'>
                              <div className='w-1/2'>
                                  <label className='w-full'> Check Out Date:</label>
                              </div>
                              <div className='w-1/2'>
                                 <span> <input type="date" defaultValue={formattedTomorrow} />12 pm</span>
                              </div>
                          </div>
                          
                      </div>

                      </div>
                   </div>
               </div>
            </div>
          

        </div>









      </section>
    <Footer/>















    </div>
  )
}

export default CheckOut;
