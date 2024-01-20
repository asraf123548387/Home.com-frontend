import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import userlogo from '../../images/hotellogin.png'
import axios from 'axios'
import AddHotelModal from './AddHotelModal'
function HotelList() {
  const[hotels,sethotel]=useState([])
  const[addHotelModalOpen,setAddHotelModalOpen]=useState(false);
 const [searchQuery, setSearchQuery] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  const open=()=>{
    setAddHotelModalOpen(true);
    console.log("hrkhjgfghasfdtygs")
  }
 const close=()=>{
  setAddHotelModalOpen(false);
 }

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchAllHotel = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/hotelList', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          params: {
            search: searchQuery,
          },
        });

        if (response.status >= 200 && response.status < 300) {
          sethotel(response.data);
        } else {
          console.error('Failed to fetch users:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchAllHotel();
  }, [searchQuery]);
      
  return (
    <div>
      <div className={`flex h-screen ${showSidebar ? '' : 'overflow-x-hidden'}`}>
    {showSidebar && (
      <div className="w-1/4 p-6 bg-gray-800 text-white h-full">
        <div className="relative flex-col justify-start items-start">
          <div className="justify-center items-start gap-4 inline-flex">
            <div className="w-12 h-12 relative flex-col justify-start items-start flex">
              <img className="w-12 h-12 rounded-full" src={userlogo} alt="User Logo" />
            </div>
            <div className="flex-col justify-start items-start">
              <div className="text-white text-lg font-bold leading-tight">Ashraf</div>
              <div className="text-gray-400 text-base font-normal leading-normal">Admin</div>
            </div>
          </div>
  
          <div className="flex-col justify-center items-start mt-4">
            <div className="pl-[23px] pr-[77.04px] py-[7px] bg-gray-700 rounded-tr-[30px] rounded-br-[30px] border-l-2 border-green-500 flex items-center gap-2">
              <div className="w-12 h-12 pl-[11px] pr-[10.69px] py-3 bg-gray-800 rounded-[40px]">
                <img src={userlogo} alt="User Logo" />
              </div>
              <div className="text-green-500 text-lg font-medium leading-normal">Hotel Management</div>
            </div>
          </div>
        </div>
      </div>
    )}
  
    <div className={`text-gray-900 w-${showSidebar ? '3/4' : 'full'} h-full overflow-y-auto transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex">
        <button onClick={toggleSidebar} className="text-blue-500 hover:text-blue-700 focus:outline-none">
          Close
        </button>
        <h1 className="text-3xl font-semibold ml-4">Hotel List</h1>
      </div>
      <div className='flex content-center'>
                  <input
                  type="text"
                  placeholder="Search by username"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="ml-4 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                  <button className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={open}>
                    Add hotel

                  </button>
                  <AddHotelModal isOpen={addHotelModalOpen}  onSuccess={close}/>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="text-left p-3 px-5">Hotel name</th>
              <th className="text-left p-3 px-5">Location </th>
              <th className="text-left p-3 px-5">images  </th>
              <th className="text-right p-3 px-5">phone</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id} className="border-b hover:bg-orange-100 bg-gray-100">
                <td className="p-3 px-5">{hotel.hotelName}</td>
                <td className="p-3 px-5">{hotel.location}</td>
                <td className="p-3 px-5">{hotel.images}</td>
                <td className="p-3 px-5 flex justify-end">
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    </div>
  )
}

export default HotelList
