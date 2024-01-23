import React, { useEffect } from 'react'
import { useState } from 'react';
import california from '../../images/california.png';
import munnar from '../../images/munnar.png';
import Navbar from './Navbar';
import mumbai from '../../images/mumbai.png';
import delhi from '../../images/delhi.png';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function Home() {

   
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [numTravelers, setNumTravelers] = useState(2);
    const [numRooms, setNumRooms] = useState(1);
    const[hotel,setHotel]=useState([]);
    const handleDestinationChange = (event) => {
      setDestination(event.target.value);
    };
  
    const handleDepartureDateChange = (event) => {
      setDepartureDate(event.target.value);
    };
  
    const handleNumTravelersChange = (event) => {
      setNumTravelers(parseInt(event.target.value, 10));
    };
  
    
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Form Submitted:', {
        destination,
        departureDate,
        numTravelers,
        numRooms,
      });
    };



    // under these code are main code 
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
   
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Adjust the number of slides to show
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    
  return (
   <div className='overflow-x-hidden'>
      
           <Navbar/>
       
           <div className="w-1/4 h-[41px] text-slate-800 text-4xl font-medium font-['Roboto'] leading-10 ml-4 md:ml-9 mt-1">Where to?</div>

<section className=" w-screen flex flex-col md:flex-row items-center mt-3 md:ml-9">
<form className='w-full  flex' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Going to"
        className=" md:w-3/12 h-12 relative bg-white rounded-lg border border-slate-500 mb-4 md:mb-0 md:mr-4"
        value={destination}
        onChange={handleDestinationChange}
      />
      <input
        type="date"
        className=" md:w-3/12 h-12 pl-4 pr-3 pb-2 bg-white rounded-lg border border-slate-500 mb-4 md:mb-0 md:mr-4"
        value={departureDate}
        onChange={handleDepartureDateChange}
      />
      <input
        type="date"
        className=" md:w-3/12 h-12 pl-4 pr-3 pb-2 bg-white rounded-lg border border-slate-500 mb-4 md:mb-0 md:mr-4"
        value={departureDate}
        onChange={handleDepartureDateChange}
      />
      

      <button type="submit">
        <div className=" md:w-[150px] h-17 bg-blue-600 rounded-full mb-4 md:mb-0 flex items-center justify-center">
          <h2 className="text-white text-2xl">Search</h2>
        </div>
      </button>
    </form>
</section>

<section >
    <div className="md:w-11/12 h-38 py-3 bg-rose-600 rounded-2xl flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mx-auto ">
        <div className="w-full md:w-[100%] md:max-w-52 h-16 flex flex-col justify-between md:mr-4">
            <p className="text-white text-xl font-medium font-['Roboto'] leading-loose text-center md:text-left">Find and book your<br />perfect stay</p> 
           
        </div>

        <div className=" md:w-[100%] md:max-w-[700px] h-[120px] justify-center items-start gap-3 md:inline-flex">
            <div className="w-full md:w-[100%] md:max-w-72 h-32 px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4">
              
                <p className=" h-[37px] text-white text-base font-normal font-['Roboto'] leading-tight text-center md:text-left">Earn rewards on every<br/>night you stay</p>
            </div>

            <div className=" md:w-[100%]  md:max-w-72 h-32 px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4">
               
                <p className="w-full h-[37px] text-white text-base font-normal font-['Roboto'] leading-tight text-center md:text-left">Save more with<br/>Member Prices</p>
            </div>
            <div className=" md:w-[100%]  md:max-w-72 h-32 px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4">
               
                <p className="w-full h-[37px] text-white text-base font-normal font-['Roboto'] leading-tight text-center md:text-left">Free cancellation<br/>options if plans change</p>
            </div>

          
        </div>
    </div>
</section>


 {/*here i want set some feture here  */}
<section>
   <div className=" text-slate-800 text-[27.67px] font-medium font-['Roboto'] leading-loose pl-20 ">Explore stays in trending destinations</div>
<div className='flex pl-20 ml-5'>
   <div className="w-[255px] h-[224.63px] relative rounded-2xl border border-zinc-200 ml-1" >
         <img src={california} alt="" className='rounded-t-2xl border border-solid border-gray-500'/>
         <h5>Madgoan </h5>
         <h6 className=''>GOA</h6>
   </div>
   <div className="w-[255px] h-[224.63px] relative rounded-2xl border border-zinc-200 ml-1" >
          <img src={munnar} alt="" className='rounded-t-2xl border border-solid border-gray-500'/>
          <h5>Kochi</h5>
         <h6 className=''>Kerala</h6>
   </div>
   <div className="w-[255px] h-[224.63px] relative rounded-2xl border border-zinc-200 ml-2" >
           <img src={mumbai} alt="" className='rounded-t-2xl border border-solid border-gray-500'/>
           <h5>Mumbai</h5>
         <h6 className=''>Maharashtra</h6>
   </div>
   <div className="w-[255px] h-[224.63px] relative rounded-2xl border border-zinc-200 ml-2" >
           <img src={delhi} alt=""  className='rounded-t-2xl border border-solid border-gray-500'/>
           <h5>Delhi</h5>
         <h6 className=''>NewDelhi</h6>
   </div>
</div>


</section>


{/* here i want anothwe section */}
<section>
<div className='ml-3' >
    <h3 className="w-1/2 text-slate-800  font-medium font-['Roboto'] leading-loose">Get away this weekend</h3>
  
</div>

<Slider {...settings} className='ml-5'>
      {hotel.map((hotelItem, index) => (
        <div key={index} className='w-1/4 h-96  mr-4 overflow-hidden'>
          <img
            src={hotelItem.images}
            alt={`Hotel ${index + 1}`}
            style={{ objectFit: 'cover', width: '90%', height: '50%' }} className='rounded-tl-2xl rounded-tr-2xl'
          />
          <p>{hotelItem.hotelName}</p>
          <p>{hotelItem.location}</p>
        </div>
      ))}
    </Slider>

</section>


  </div>

  )
}

export default Home
