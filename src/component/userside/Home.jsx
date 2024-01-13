import React from 'react'

import Navbar from './Navbar'
function Home() {
  return (
   <div>
      
           <Navbar/>
       
           <div className="w-[166px] h-[41px] text-slate-800 text-4xl font-medium font-['Roboto'] leading-10 ml-4 md:ml-20 mt-1">Where to?</div>

<section>
    <div className="flex flex-col md:flex-row items-center mt-3 md:mt-0 md:ml-20">
        <div className="w-full md:w-[330px] h-12 relative bg-white rounded-lg border border-slate-500 mb-4 md:mb-0 md:mr-4">
            <input type='text' placeholder='Going to' className='ml-1 w-full h-full' />
        </div>

        <div className="w-full md:w-[300px] h-12 pl-4 pr-3 pb-2 bg-white rounded-lg border border-slate-500 mb-4 md:mb-0 md:mr-4">
            <div className="w-full h-full text-slate-800 text-base font-normal font-['Roboto'] leading-tight">9 Jan - 13 Jan</div>
        </div>

        <div className="w-full md:w-[300px] h-12 pl-4 pr-3 pb-2 bg-white rounded-lg border border-slate-500 mb-4 md:mb-0 md:mr-4">
            <div className="w-full h-full text-slate-800 text-base font-normal font-['Roboto'] leading-tight">2 travellers, 1 room</div>
        </div>

        <div className="w-full md:w-[150px] h-17 bg-blue-600 rounded-full mb-4 md:mb-0 flex items-center justify-center">
    <h2 className='text-white text-2xl'>Search</h2>
</div>

    </div>
</section>

<section className="flex flex-col items-center mt-1 md:ml-20">
    <div className="w-full md:w-[1140px] h-36  py-3 bg-rose-600 rounded-2xl flex justify-center items-center gap-10 mr-12">
        <div className="w-full md:w-[200px] h-16 flex flex-col justify-between mr-4">
            <div className="text-white text-[20px] font-medium font-['Roboto'] leading-loose">Find and book your<br />perfect stay </div>
            <div className="w-4 h-4" />
        </div>

        <div className="w-full md:w-[700px] h-[120px] justify-center items-start gap-3 inline-flex">
            <div className="w-[270px] h-[120px] px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4 inline-flex">
                <div className="w-12 h-12 relative flex-col justify-start items-start flex" />
                <div className="w-[300px] h-10 pr-2 pt-px pb-0.5 justify-start items-center inline-flex">
                    <div className="w-full h-[37px] text-white text-base font-normal font-['Roboto'] leading-tight">Earn rewards on every<br/>night you stay</div>
                </div>
            </div>

            <div className="w-[270px] h-[120px] px-5 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4 inline-flex">
                <div className="w-12 h-12 relative flex-col justify-start items-start flex" />
                <div className="w-[270px] h-10 pr-2 pt-px pb-0.5 justify-start items-center inline-flex">
                    <div className="w-full h-[37px] text-white text-base font-normal font-['Roboto'] leading-tight">Save more with<br/>Member Prices</div>
                </div>
            </div>

            <div className="w-[270px] h-[120px] px-3 py-9 bg-rose-800 rounded-2xl justify-center items-center gap-4 inline-flex">
                <div className="w-12 h-12 relative flex-col justify-start items-start flex" />
                <div className="w-[270px] h-10 pr-2 pt-px pb-0.5 justify-start items-center inline-flex">
                    <div className="w-full h-[37px] text-white text-base font-normal font-['Roboto'] leading-tight">Free cancellation<br/>options if plans change</div>
                </div>
            </div>
        </div>
    </div>
</section>



  </div>

  )
}

export default Home
