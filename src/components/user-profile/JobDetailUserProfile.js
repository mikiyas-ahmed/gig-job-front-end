import React,{useState} from 'react'

export default function JobDetailUserProfile() {
  const [user, setUsers] = useState({ id: 6, profesion: 'Java Programmer', 
  name: 'Mikiyas Eshetu', Summery: "Open and maintain customer accounts by recording account information Resolve product or service problems by clarifying the customer' "
  , rating: 4 }
      );
  return (
    <div className='blogContainer'>
        <div className='blogModel'>
            <div className='blogTitle'>
                <p>{user.name}</p> 
            </div>
            <div className='blogCategory'>
                <p>{user.profesion}</p>
                <p>{user.rating}</p>
            </div>            
            <div className='blogCategory'>
                <p>{user.Summery}</p>
            </div>
        </div>
    </div>
  )
}
