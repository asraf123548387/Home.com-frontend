import React,{useState} from 'react'

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

function SearchDate() {

    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [selectionRange, setSelectionRange] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    });
  
    const handleSelect = (ranges) => {
      setSelectionRange(ranges.selection);
    };
  return (
 
      <section className='flex flex-wrap mt-2'>
                      <div className='w-full md:w-12'></div>

                      <div className='w-full md:w-11/12'>
                          <form className="h-16 p-1 bg-yellow-500 rounded-lg shadow flex justify-center items-start gap-1">
                              <input className="flex-grow flex-shrink flex-basis-0 self-stretch px-2 py-2 bg-white rounded justify-center items-center w-4/12 h-14 border border-gray-300" placeholder='Enter your destination' />

                                <div onClick={() => setDatePickerOpen(!datePickerOpen)}   className="flex-grow flex-shrink flex-basis-0 self-stretch px-2 py-2 bg-white rounded justify-center items-center w-4/12 h-14 border border-gray-300">
                                <input
                                    className='h-10  text-lg pl-4' // Adjust height and width as needed
                                    style={{ width: '23vw', fontSize: '16px' }} // Additional inline styles
                                    value={`${selectionRange.startDate.toDateString()} - ${selectionRange.endDate.toDateString()}`}
                                    readOnly
                                />
                                    {datePickerOpen && (
                                     <div style={{ position: 'absolute', zIndex: 1 }}>
                                    <DateRangePicker
                                        ranges={[selectionRange]}
                                        onChange={handleSelect}
                                    />
                                </div>
                                    )}
                                </div>

                              <input className="flex-grow flex-shrink flex-basis-0 self-stretch px-2 py-2 bg-white rounded justify-center items-center w-3/12 h-14 border border-gray-300" />

                              <button className="pt-3 px-2 pb-3 bg-blue-700 text-white rounded md:mt-0 w-full md:w-1/12">
                                  Search
                              </button>
                          </form>
                      </div>
                  </section>
    
  )
}

export default SearchDate
