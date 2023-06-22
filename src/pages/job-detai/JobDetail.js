import React,{useState} from 'react'
import JobDetailUserProfile from '../../components/user-profile/JobDetailUserProfile'; 

export default function JobDetail() {
    const [job, setUsers] = useState({ id: 1, jobTitle: 'Java Programmer', 
    jobCategory: 'IT', description: "Open and maintain customer accounts by recording account information Resolve product or service problems by clarifying the customer's complaint; determining the cause of the problem; selecting and explaining the best solution to solve the problem; expediting correction or adjustment; following up to ensure resolution Maintain financial accounts by processing customer adjustments Recommend potential products or services to management by collecting customer information and analyzing customer needs Prepare product or service reports by collecting and analyzing customer information Contribute to team effort by accomplishing related results as needed Manage large amounts of incoming calls Generate sales leads Identify and assess customers' needs to achieve satisfaction Build sustainable relationships of trust through open and interactive communication Provide accurate, valid, and complete information by using the right methods/tools Meet personal/team sales targets and call handling quotas Handle complaints, provide appropriate solutions and alternatives within the time limits, and follow up to ensure resolution Keep records of customer interactions, process customer accounts, and file documents Follow communication procedures, guidelines, and policies Go the extra mile to engage customers Resolve customer complaints via phone, email, mail, or social media Use telephones to reach out to customers and verify account information Greet customers warmly and ascertain problem or reason for calling Cancel or upgrade accounts Assist with placement of orders, refunds, or exchanges Advise on company information Take payment information and other pertinent information such as addresses and phone numbers Place or cancel orders Answer questions about warranties or terms of sale"
    , price: 600 }
        );
  return (
    <div className='jobsPageContainer'>
      <div className='jobListContainer'>
          <h3 >JOB OPPORTUNITY</h3>
                     <div className='singleJobCard' key={job.id}>
                     <h3 >{job.jobTitle}</h3> {job.jobCategory}
                      <div> {job.description}  {job.price}</div>
                    </div>
      </div>
      <JobDetailUserProfile/>
    </div>
  )
}
