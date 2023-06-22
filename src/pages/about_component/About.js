import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import JobFilter from '../../components/job-filter/JobFilter';
import JobBlog from '../../components/job-blog/JobBlog';

import './About.scss';
 function About() {
  const [jobs, setUsers] = useState([
    { id: 1, jobTitle: 'Java Programmer', jobCategory: 'IT', description: 'Description 1 ready to appear', price: 600 },
    { id: 2, jobTitle: 'Setup Studio lightning', jobCategory: 'Electricity', description: 'Description 2 ready to appear', price: 900 },
    { id: 3, jobTitle: 'Wedding DJ', jobCategory: 'Entertainment', description:'Description 3 ready to appear', price: 800 },
    { id: 4, jobTitle: 'Graphics Designer', jobCategory: 'IT', description: 'Description 4 ready to appear', price: 1200 },
    { id: 5, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 6, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 7, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 8, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 9, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 10, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 11, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 12, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 13, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 14, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 15, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 16, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 },
    { id: 17, jobTitle: 'setup Hotel electricity', jobCategory: 'Electricity', description:'Description 5 ready to appear', price: 2500 }
  ]);
  return (
    <div className='jobsPageContainer'>
      <JobFilter/>
      <div className='jobListContainer'>
          <h3 >List of Jobs</h3>
                  {jobs && jobs.map(jobs =>
                  <Link to='/job-detail'>
                     <div className='singleJobCard' key={jobs.id}>
                      {jobs.jobTitle} {jobs.jobCategory}
                      <div> {jobs.description}  {jobs.price}</div>
                    </div>
                  </Link>
                   
                  )}
      </div>
      <JobBlog/>
    </div>
    
 );
}
export default About;