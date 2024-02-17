import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
function UserReview() {
    const [userReviews, setUserReviews] = useState([]);
    const token = localStorage.getItem('token');
    const userId = parseInt(localStorage.getItem('userId'), 10); // Convert userId to number if needed

    useEffect(() => {
        const fetchUserReviews = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/userReviewss/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUserReviews(response.data);
            } catch (error) {
                console.error('Error fetching user reviews:', error);
            }
        };

        fetchUserReviews();
    }, [token, userId]);
    
  return (
    <div>
        <Navbar/>

      
    </div>
  )
}

export default UserReview
