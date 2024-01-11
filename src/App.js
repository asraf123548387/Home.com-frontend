
import './App.css';

import { BrowserRouter,Route, Routes } from 'react-router-dom';

import RegisterForm from './RegisterForm';
import Login from './Login';
import Home from "./component/userside/Home";

import AdminDashboard from "./component/adminside/adminDashboard";
import UserList from "./component/adminside/userList";
import HotelList from "./component/adminside/HotelList";

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
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
