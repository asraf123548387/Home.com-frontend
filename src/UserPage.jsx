import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';

function UserPage() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    mobile:'',
    roles:'',
  });
  const history = useNavigate();
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:8080/currentUser', config);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching current user:', error.message);
      }
    };

    fetchCurrentUser();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
  history('/')
  };
  return (
    <div >
           <nav style={{ backgroundColor: 'black', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 'bold', fontSize: '20px' }}>USER Profile</span>
             <div style={{ display: 'flex', alignItems: 'center' }}>
    
                 <button  onClick={handleLogout} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '5px 10px', cursor: 'pointer' }}>
                  Logout
                 </button>
             </div>
           </nav>
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                  <h5>{user.userName}</h5>
                  <p>Web Designer</p>
                  <i className="far fa-edit mb-5"></i>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{user.email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">{user.mobile}</p>
                      </div>
                    </div>
                    <h6>ROLES</h6>
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                       
                        <p className="text-muted">{user.roles}</p>
                      </div>
                     
                    </div>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                      <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                      <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default UserPage
