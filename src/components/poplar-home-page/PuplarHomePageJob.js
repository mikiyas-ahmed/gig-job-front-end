import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './PuplarHomePageJob.scss';

export default function PuplarHomePageJob() {
  
    const [topJobs, setUsers] = useState([
        { id: 1, jobTitle: 'Java Programmer', jobCategory: 'IT', description: 'Description 1 ready to appear', price: 600 },
        { id: 2, jobTitle: 'Setup Studio lightning', jobCategory: 'Electricity', description: 'Description 2 ready to appear', price: 900 },
        { id: 3, jobTitle: 'Wedding DJ', jobCategory: 'Entertainment', description:'Description 3 ready to appear', price: 800 },
        { id: 4, jobTitle: 'Graphics Designer', jobCategory: 'IT', description: 'Description 4 ready to appear', price: 1200 },
        { id: 5, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
        { id: 6, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
        { id: 7, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
        { id: 8, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    ]);
    return (
    <div className='firstTopContainer'>
        <div className='popular-title'><p>Pupular Gigs</p></div>
        
        <div className='topJobListContainer'>
                  {topJobs &&   topJobs.map(topJobs =>
                  <Link to='/register'>
                     <div className='topSingleJobCard' key={topJobs.id}>
                      {topJobs.jobTitle} {topJobs.jobCategory}
                      <div> {topJobs.description}  {topJobs.price}</div>
                    </div>
                  </Link> )}                  
      </div>
      <div className='loadMoreButton'>
        <button>Load More Listings</button>
      </div>      
    </div>
  )
}
