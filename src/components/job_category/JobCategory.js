import React from 'react'
import dataList from'../../data.json'
import './JobCategory.scss'

export default function JobCategory() {
  return (
    <div className='jobCategoryContainer'>
      <div className='title'><p>Job Categories</p></div>
    <div className='categoryContainer'>
            <div className='categoryWrapper'>
            {
                dataList.map(({title,image}) => (
                  <div className='singleCategory' key={title} 
                      style={{backgroundImage: `url(${image})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover'}}>
                        <div>
                            {title}
                        </div>
                  </div>  ))
            }  
      </div>
    </div>
    </div>
  )
}
