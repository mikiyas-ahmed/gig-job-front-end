import React from 'react'
import './Home.scss'
import JobCategory from '../../components/job_category/JobCategory';
// import UserProfile from '../../components/user-profile/UserProfile';
import PuplarHomePageJob from '../../components/poplar-home-page/PuplarHomePageJob';
import HomPageUserReview from '../../components/home-page-user-review/HomPageUserReview';
import GetStarted from '../../components/getstarted/GetStarted';
import HomePageBlog from '../../components/home-page-blog/HomePageBlog';
function Home() {
  return (
    <>
      <div className='home_first'>
          <h1  className='home_first_txt1'>Welcome to Gig Job</h1>
      </div>
      <div>
        <JobCategory/>
        <PuplarHomePageJob/>
        <HomPageUserReview/>
        <GetStarted/>
        <HomePageBlog/>
      </div>
    </>
  )
}
export default Home;