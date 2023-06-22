import React,{ useState } from "react";
import './HomePageBlog.scss'

export default function HomePageBlog() {
  const [reviews, setUsers] = useState([
    { id: 1, reviewTitle: 'Great Design', name: 'Mikiyas Eshetu', description: 'services have allowed me to find more freelancing work as a writer than any other website. It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done. I would recommend Guru to any freelancer who is looking to find new clients online.', rate: 5 }]);
return (
<div className='homeblogFirstContainer  '>
     <div className='homeblogContainer'>
              {reviews &&   reviews.map(reviews =>
                 <div className='singleHomeBlogCard' key={reviews.id}>
                    <div className='homeblogTitle'>
                      <p>{reviews.reviewTitle}</p>
                    </div>
                    <div className='homeblogDescription'> 
                      <p>{reviews.description}</p>
                    </div>

                    <div className='homeblogRate'>
                      <p>{reviews.rate}</p>
                    </div>

                    <div className='homeblogName'>
                      <p>{reviews.name}</p>
                    </div>  
                </div>
               )}
  </div>
</div>
)
}
