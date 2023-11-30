
import './App.css';
import Login from './Login';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import RegisterForm from './RegisterForm';
import UserPage from './UserPage';
import AdminPage from './AdminPage';
import AddUser from './AddUser';
import EditUser from './EditUser';

function App() {
  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>

    <Route path='/signUp' element={<RegisterForm/>}/>

    <Route path='/home' element={<Home/>}/>

    <Route path='/user' element={<UserPage/>}/>

    <Route path='/admin' element={<AdminPage/>}/>

    <Route path='/adduser' element={<AddUser/>}/>
   
    <Route path="/edituser/:userId" element={<EditUser/>} />
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
