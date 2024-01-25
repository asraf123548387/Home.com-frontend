import React, { useEffect } from 'react'
import { useState } from 'react';
import california from '../../images/california.png';
import munnar from '../../images/munnar.png';
import Navbar from './Navbar';
import mumbai from '../../images/mumbai.png';
import delhi from '../../images/delhi.png';
import logo from '../../images/logo.png'
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Home.css'
import { Link } from 'react-router-dom';



function Home() {

    const[hotel,setHotel]=useState([]);
   
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
     
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Adjust the number of slides to show
      slidesToScroll: 1,
      autoplay: true,        // Enable automatic sliding
      autoplaySpeed: 3000,
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
       
       <div className="w-1/4 h-[41px] text-slate-800 text-4xl font-medium font-['Roboto'] leading-10 ml-5 md:ml-9 mt-4">Where to?</div>




       <section className='flex'>
            <div className='w-1/12'>

            </div>
                    
            <div className='w-10/12'>
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


<section className='mt-4'>
    <div className="md:w-11/12 h-auto py-3 bg-rose-600 rounded-2xl flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mx-auto ">
        <div className="w-full md:w-[100%] md:max-w-52 h-auto md:h-38 flex flex-col justify-between md:mr-4">
            <p className="text-white text-xl font-medium font-['Roboto'] leading-loose text-center md:text-left">Find and book your<br />perfect stay</p> 
        </div>

        <div className="md:w-[100%] md:max-w-[700px] h-auto md:h-[120px] justify-center items-start gap-3 md:inline-flex">
            <div className="w-full md:w-[100%] md:max-w-72 h-auto md:h-32 px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4">
                <p className="h-auto text-white text-base font-normal font-['Roboto'] leading-tight text-center md:text-left">Earn rewards on every<br/>night you stay</p>
            </div>

            <div className="w-full md:w-[100%] md:max-w-72 h-auto md:h-32 px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4">
                <p className="w-full h-auto text-white text-base font-normal font-['Roboto'] leading-tight text-center md:text-left">Save more with<br/>Member Prices</p>
            </div>
            <div className="w-full md:w-[100%] md:max-w-72 h-auto md:h-32 px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4">
                <p className="w-full h-auto text-white text-base font-normal font-['Roboto'] leading-tight text-center md:text-left">Free cancellation<br/>options if plans change</p>
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
<div>
<Slider {...settings} className='ml-5 custom-slider'>
      {hotel.map((hotelItem, index) => (
       <Link to={`/userHotelList/${hotelItem.hotelId}`} key={index} className='w-1/4 h-96  mr-4 overflow-hidden no-underline bg-white rounded-lg shadow-md hover:shadow-2xl transition duration-500 ease-in-out'> 
          <img
            src={hotelItem.images}
            alt={`Hotel ${index + 1}`}
            style={{ objectFit: 'cover', width: '90%', height: '50%' }} className='rounded-tl-2xl rounded-tr-2xl mx-2'
            
          />
          <div className='h-8'>
          <div className='text-black ml-2 mt-1 font-serif font-semibold'>{hotelItem.hotelName}</div>
          <div className='text-black ml-2 font-semiboldmt-4'>{hotelItem.location}</div>
          <div className='  text-black mr-4 '>₹ {hotelItem.price}</div> 
          <p className='font-thin'>per night</p>
          </div>

        </Link>
      ))}
    </Slider>
</div>
</section>



<footer class=" dark:bg-gray-900 mt-20">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              
                  <img src={logo} class="h-8 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">HOME.com</span>
         
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase underline">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <div href="https://flowbite.com/" class="hover:underline">hotel.com</div>
                      </li>
                      <li>
                          <div href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</div>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase underline">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <div href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</div>
                      </li>
                      <li>
                          <div href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</div>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase underline ">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <div href="#" class="hover:underline">Privacy Policy</div>
                      </li>
                      <li>
                          <div href="#" class="hover:underline">Terms &amp; Conditions</div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <div className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </div>
              <div className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </div>
              <div className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </div>
              <div className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </div>
              <div className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </div>
          </div>
      </div>
    </div>
</footer>

  </div>

  )
}

export default Home
