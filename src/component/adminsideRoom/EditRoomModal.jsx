import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Swal from 'sweetalert2';
function EditRoomModal(isOpen,roomData,onSuccess,onClose) {
    const[editedRoom,setEditedRoom]=useState({...roomData})
    const [msg, setMsg] = useState('');
    const [errors, setErrors] = useState({});


    const handleChange=(e)=>{
        const{name,value}=e.target;
        setEditedRoom({...editedRoom,[name]:value});
        setErrors({...errors,[name]:''});

    }

    const updateRoom = async (e) => {
        e.preventDefault();
    
          try {
            const token = localStorage.getItem('token');
            const headers = {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            };
    
            const response = await axios.put(
              `http://localhost:8080/admin/room/${roomData.roomId}`,
              editedRoom,
              { headers }
            );
    
            if (response.status === 200) {
              console.log('Hotel Updated Successfully');
              setMsg('Hotel Updated Successfully');
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Room has been updated",
                showConfirmButton: false,
                timer: 1500
              });
              if (onSuccess) {
                onSuccess();
              }
    
              setEditedRoom({ ...roomData });
              onClose();
            } else {
              console.error('Failed to update hotel details:', response.statusText);
              setMsg('Failed to update hotel. Please try again.');
            }
          } catch (error) {
            console.error('Error updating hotel details:', error.message);
            setMsg('Error updating hotel details. Please try again.');
          }
        
      };
    
      useEffect(() => {
        setEditedRoom({ ...roomData });
        setMsg('');
        setErrors({});
      }, [roomData]);





  return (
    
       <div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: 'transparent',  // Set overlay background to transparent
          },
          content: {
            border: 'none',  // Remove border
            background: 'transparent',  // Set content background to transparent
            overflowY: 'scroll',
            height: 'auto',
          },
        }}
      >
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <div className='bg-white p-3 rounded w-50 shadow'>
            <h2 className="text-center mb-3">Add Rooms</h2>
            {msg && <p className="text-center text-success font-weight-bold">{msg}</p>}
      
            <form className="w-full max-w-lg" onSubmit={(e) => updateRoom(e)}>
              {/* Form fields */}
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="roomNumber">
                    Room Number:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="roomNumber" type="text" placeholder="..." onChange={(e) => handleChange(e)} value={editedRoom.roomNumber}/>
                  {errors.roomNumber && <p className="text-danger">{errors.roomNumber}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="roomType">
                    Room Type:
                  </label>
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="roomType"
                    onChange={(e) => handleChange(e)}
                    value={editedRoom.roomType}
                  >
                    <option value="">Select Room Type</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="deluxe">Deluxe</option>
                  </select>
                  {errors.roomType && <p className="text-danger">{errors.roomType}</p>}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pricePerNight">
                    Price Per Night:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="pricePerNight" type="text" placeholder="..." onChange={(e) => handleChange(e)} value={editedRoom.pricePerNight}/>
                  {errors.pricePerNight && <p className="text-danger">{errors.pricePerNight}</p>}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="images">
                    images:
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="images" type="text" placeholder="..." onChange={(e) => handleChange(e)} value={editedRoom.images}/>
                  {errors.images && <p className="text-danger">{errors.images}</p>}
                </div>
              </div>

             

              <div className="d-flex justify-content-between">
                <button type="submit" className='btn btn-primary btn-block'>Add</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
    
  )
}

export default EditRoomModal;