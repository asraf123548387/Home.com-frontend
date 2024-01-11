import React from 'react'
import userlogo from '../../images/user.png'
import hotellogin from '../../images/hotellogin.png'
import { Link } from 'react-router-dom'
function AdminDashboard() {
  return (
    <div className="flex h-screen">
    <div className="w-1/4 p-6 bg-gray-800 text-white h-full">
      <div className="relative flex-col justify-start items-start">
      <div className="bg-gray-800 text-white p-3">
          <h1 className="text-3xl font-bold">DASH BOARD</h1>
      </div>

        <div className="justify-center items-start gap-4 inline-flex">
          <div className="w-10 h-10 relative flex-col justify-start items-start flex">
            <img className="w-10 h-10 rounded-full" src={userlogo} alt="User Logo" />
            
          </div>
          <div className="flex-col justify-start items-start">
            <div className="text-white text-base font-bold leading-tight">Ashraf</div>
            <div className="text-gray-400 text-base font-normal leading-normal">Admin</div>
          </div>
        </div>
  
        <div className="flex-col justify-center items-start mt-4">
          <div className="pl-[23px] pr-[77.04px] py-[7px] bg-gray-700 rounded-tr-[30px] rounded-br-[30px] border-l-2 border-green-500 flex items-center gap-2">
            <div className="w-10 h-10 pl-[11px] pr-[10.69px] py-3 bg-gray-800 rounded-[40px]">
            
            </div>
            <div className="text-green-500 text-base font-medium leading-normal">Dashboard</div>
          </div>

          <Link to='/userList'>
            <div className="self-stretch grow shrink basis-0 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch pl-[23px] py-[7px] rounded-tr-[30px] rounded-br-[30px] border-l-2 border-slate-100 justify-end items-center gap-2 inline-flex">
                        <div className="w-10 h-10 pl-[11px] pr-[10.69px] pt-[12.22px] pb-[11.78px] bg-white rounded-[40px] justify-center items-center inline-flex">
                        <img src={userlogo} alt=''></img>
                        </div>
                        <div className="w-[155px] h-6  text-base font-medium font-['Heebo'] leading-normal">User management</div>
                    </div>
                </div>
                </Link>
                <Link to='/hotellist'>
            <div className="self-stretch grow shrink basis-0 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch pl-[23px] py-[7px] rounded-tr-[30px] rounded-br-[30px] border-l-2 border-green-500 justify-end items-center gap-2 inline-flex">
                        <div className="w-10 h-10 pl-[11px] pr-[10.69px] pt-[12.22px] pb-[11.78px] bg-white rounded-[40px] justify-center items-center inline-flex">
                        <img src={hotellogin} alt=''></img>
                        </div>
                        <div className="w-[155px] h-6  text-base font-medium font-['Heebo'] leading-normal ">Hotel management</div>
                    </div>
                </div>
                </Link>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default AdminDashboard
