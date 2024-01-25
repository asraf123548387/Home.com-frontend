
import './App.css';

import { BrowserRouter,Route, Routes } from 'react-router-dom';

import RegisterForm from './RegisterForm';
import Login from './Login';
import Home from "./component/userside/Home";

import AdminDashboard from "./component/adminside/adminDashboard";
import UserList from "./component/adminside/userList";
import HotelList from "./component/adminside/HotelList";
import Otppage from './component/userside/Otppage';
import ForgotPasswordEmail from './component/userside/ForgotPasswordEmail';
import ForgotPaswordverifypage from './component/userside/ForgotPaswordverifypage';
import SadminDashboard from './component/superadmin/SadminDashboard';
import UserHotelList from './component/userside/UserHotelList';
import UserProfilePage from './component/userside/UserProfilePage';
import HotelviewPage from './component/userside/HotelviewPage';


function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signUp' element={<RegisterForm/>}/>
    <Route path='/admin' element={<AdminDashboard/>}></Route>
    <Route path='/userList' element={<UserList/>}></Route>
    <Route path='/hotellist' element={<HotelList/>}></Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/otp' element={<Otppage/>}/>
    <Route path='/otpEmail' element={<ForgotPasswordEmail/>}/>
    <Route path='/otpVerify' element={<ForgotPaswordverifypage/>}/>
    <Route path='/SAdmin' element={<SadminDashboard/>}/>
    <Route path='/userHotelList/:hotelId' element={<UserHotelList/>}/>
    <Route path='/userProfilePage' element={<UserProfilePage/>}/>
    <Route path='/hotelViewPage' element={<HotelviewPage/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
