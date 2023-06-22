import React from 'react'
import './JobAddForm.scss'

export default function JobAddForm() {
    return (
      <div className="job-add-form-first">
        <div className="job-add-form-container">
           <div className='title'>
            <h1 >Post Your Job!</h1>
           </div> 
           <p >Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
            <div className='add-form-component-container'>
                <div class="job-add-input-block">            
                  <input type="email" placeholder="Job Title"/> 
                </div>

                <div class="job-add-input-block">
                  <select name="cars" id="cars" >
                  <option value="" disabled selected>Select Category</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div class="job-add-input-block">
                  <textarea rows="5" cols="60" placeholder=' Job Detail ...'/>
                </div>
                <div class="job-add-input-block">
                  <input type="price" placeholder="price"/>
                </div>
                <button>Submit</button>
            </div>
        
        </div>
      </div>
      );
}