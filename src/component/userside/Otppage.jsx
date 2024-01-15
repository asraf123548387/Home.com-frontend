import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Otppage() {
  const navigate=useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const inputRefs = useRef(Array(4).fill(null).map(() => React.createRef()));

  const handleChange = (index, value) => {
    setVerificationCode((prevVerificationCode) => {
      const newVerificationCode = [...prevVerificationCode];
      newVerificationCode[index] = value;
  
      // Move focus to the next input field if a character is entered
      if (value !== '' && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].current.focus();
      }
  
      return newVerificationCode;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/verifyOtp', {
        email,
        otp: verificationCode.join(''),

      });

      // Handle the response as needed
      console.log('Verification Successful:', response.data);
      navigate('/login')

    } catch (error) {
      // Handle errors, for example, display an error message
      console.error('Verification Failed:', error.response?.data || 'Unexpected error');
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {email}</p>
            </div>
          </div>

          <div>
            <form action="" method="post" className="max-w-xs mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center justify-between">
                  {verificationCode.map((value, index) => (
                    <div key={index} className="w-6 h-14 m-2">
                      <input
                        ref={inputRefs.current[index]}
                        className="w-full h-full flex items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name={`digit-${index}`}
                        id={`digit-${index}`}
                        value={value}
                        onChange={(e) => handleChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-3">
                  <button
                    className="flex items-center justify-center w-full border rounded-xl outline-none py-3 bg-blue-700 border-none text-white text-sm shadow-sm"
                    type="submit"
                  >
                    Verify Account
                  </button>

                  <div className="flex items-center justify-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{' '}
                    <a
                      className="flex items-center text-blue-600"
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otppage;

