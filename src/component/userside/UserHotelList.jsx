import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'; 
import axios from 'axios';
import Footer from './Footer';
import SearchDate from './SearchDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function UserHotelList() {
    const{hotelId}=useParams();
    const[hotel,setHotel]=useState([]);
    const [isLoadingHotelDetails, setIsLoadingHotelDetails] = useState(true); // State variable for hotel details loading state
   
    useEffect(() => {
      const fetchAllHotel = async () => {
        try {
          
        
    
          const response = await axios.get('http://localhost:8080/user/hotelList');
    
          if (response.status >= 200 && response.status < 300) {
            setHotel(response.data);
            setIsLoadingHotelDetails(false);
          } else {
            console.error('Failed to fetch hotels:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching hotels:', error.message);
        }
      };
    
      fetchAllHotel();
    }, []);
    if (isLoadingHotelDetails) {
      return <Spinner />;
    }
 // Find the hotel with the matching hotelId
 const selectedHotel = hotel.find(hotelItem => hotelItem.hotelId === parseInt(hotelId));
// Filter out the selected hotel from the hotel array
const remainingHotels = hotel.filter(hotelItem => hotelItem.id !== parseInt(hotelId));

// Construct the sortedHotel array by placing the selected hotel at the beginning
const sortedHotel = selectedHotel ? [selectedHotel, ...remainingHotels] : hotel;


// below code is sort by hotel price 
const options = [
  { value: 'low to high', label: 'price:low to high' },
  { value: 'high to low', label: 'price:high to low' },
  { value: 'rating', label: 'guest rating' },
  
];

  return (
    <div className='bg-zinc-100'>
      <Navbar/>

      <SearchDate/>






<section className='flex'>
        <div className='w-4/12'>
            
          <div className='flex justify-center pt-10'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984962.9467283923!2d73.34722614574983!3d15.348759664324652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1707106860458!5m2!1sen!2sin" className='rounded-3xl w-80 ' ></iframe>
          </div>
          <div className='flex justify-center  '>
            <div className='bg-white  h-auto w-80  mt-10 '>
            <Dropdown
                                options={options}
                                placeholder="Sort by"
                                menuPlacement="bottom"
                                className='text-lg font-mono  ' // Adjust font size
                                 
                            />
            </div>
          </div>
          <hr></hr>
          <div className='flex justify-center text-2xl font-bold mt-4'>
             Search By Property Name
           </div>
           <div className='flex justify-center mt-4'>
              <div className='w-80 bg-white h-12 rounded-2xl flex '>
               <FontAwesomeIcon icon={faMagnifyingGlass} className='p-3' />
               <input className='pt-1 pl-3 outline-none font-bold ' placeholder='e.g MARRIOT'/>
             
              </div>

           </div>
           <hr></hr>
           <div className='font-medium pl-9 text-lg'>
               Price per night
           </div>
           <div class="flex justify-center mt-4">
              <div class="w-80">
                  <div class="flex justify-between mb-2">
                      <label class="text-lg">₹ 0</label>
                      <label class="text-lg">₹ 3000</label>
                  </div>
                  <input type="range" class="w-full bg-gray-300 rounded-lg appearance-none cursor-pointer"/>
              </div>
          </div>

          <hr></hr>
          <div className='font-medium pl-9 text-lg'>
            Guest rating
          </div>
          <div class="flex justify-center mt-2">
                <div class="w-80 text-lg">
                    <label class="flex items-center mb-2">
                        <input type="radio" name="rating" value="any" class="mr-2 form-radio"/>
                        Any
                    </label>
                    
                    <label class="flex items-center mb-2">
                        <input type="radio" name="rating" value="9" class="mr-2 form-radio"/>
                        Wonderful 9+
                    </label>
                    
                    <label class="flex items-center mb-2">
                        <input type="radio" name="rating" value="8" class="mr-2 form-radio"/>
                        Very good 8+
                    </label>
                    
                    <label class="flex items-center mb-2">
                        <input type="radio" name="rating" value="7" class="mr-2 form-radio"/>
                        Good 7+
                    </label>
                </div>
            </div>
            <hr></hr>




         
        </div>
  
         
        <div className="max-w-screen-lg flex-col mt-4">
           
                          
            {sortedHotel.map((hotelItem, index) => (
              
              <Link to={`/hotelViewPage/${hotelItem.hotelId}`} key={index} style={{ textDecoration: 'none' }}>
                    {index === 0 && <div className='pl-2 text-white bg-blue-800 w-5/6 rounded-tl-2xl'>You were interested in this property.</div>}
                <div className={`flex w-full md:w-5/6 h-48 relative border border-black-200 mb-2 ${index === 0 ? 'bg-blue-100 rounded-br-2xl rounded-bl-2xl' : 'bg-white  rounded-2xl'}`}>
                  <img src={hotelItem.images} alt={`Hotel ${hotelItem.id}`} className={`h-48   w-48  ${index === 0 ?' rounded-bl-2xl':'rounded-bl-2xl rounded-tl-2xl'}`} />
                  <div className="flex flex-col justify-center ml-2 w-full">
                    <div> <h5 className='text-black font-serif'>{hotelItem.hotelName}</h5></div>
                    <div className='text-black'>{hotelItem.location}</div>
                    <div className='text-black'>{hotelItem.address}</div>
                    <div className='flex justify-end text-black'>₹{hotelItem.price}</div>
                
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
