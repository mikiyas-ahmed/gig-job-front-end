import React, {useState } from 'react';
import './HomPageUserReview.scss'
export default function HomPageUserReview() {
    const [reviews, setUsers] = useState([
        { id: 1, reviewTitle: 'Great Design', name: 'Mikiyas Eshetu', description: 'services have allowed me to find more freelancing work as a writer than any other website. It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done. I would recommend Guru to any freelancer who is looking to find new clients online.', rate: 5 },
        { id: 2, reviewTitle: 'Great Design', name: 'Mikiyas Eshetu', description: 'services have allowed me to find more freelancing work as a writer than any other website. It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done. I would recommend Guru to any freelancer who is looking to find new clients online.', rate: 5 },
        { id: 3, reviewTitle: 'Great Design', name: 'Mikiyas Eshetu', description: 'services have allowed me to find more freelancing work as a writer than any other website. It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done. I would recommend Guru to any freelancer who is looking to find new clients online.', rate: 5},
         ]);
  return (
    <div className='reviewFirstContainer'>
         <div className='reviewsContainer'>
                  {reviews &&   reviews.map(reviews =>
                     <div className='singleReviewCard' key={reviews.id}>
                        <div className='reviewTitle'>
                          <p>{reviews.reviewTitle}</p>
                        </div>
                        <div className='reviewDescription'> 
                          <p>{reviews.description}</p>
                        </div>

                        <div className='reviewRate'>
                          <p>{reviews.rate}</p>
                        </div>

                        <div className='revieawName'>
                          <p>{reviews.name}</p>
                        </div>  
                    </div>
                   )}
      </div>
    </div>
  )
}
