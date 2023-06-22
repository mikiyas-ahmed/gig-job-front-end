import React from 'react'
import './UserRegisterPage.scss'

export default function UserRegisterForm() {
  return (
        <div className="register-form-container">
            <div class="register-modal-container">
                <div class="register-modal-right">
                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt=""/>
                </div>
                <div class="register-modal-left">
                  <h1 class="register-modal-title">Register!</h1>
                  <p class="register-modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
                  <div className='register-component-container'>
                    <div className='register-input-block-container'>
                      <div class="register-input-container">            
                        <input type="email" placeholder="First Name"/> 
                        </div>
                        <div class="register-input-container">
                        <input type="text" placeholder="Last Name"/>
                      </div>
                    </div>
                  
                    <div className='register-input-block-container'>
                      <div class="register-input-container">
                        <input type="text" placeholder="Email"/>
                      </div>
                      <div class="register-input-container">
                        <input type="text" placeholder="Profession"/>
                      </div>
                    </div>
                                      
                    <div class="register-user-input-block">
                      <input type="password" placeholder="password"/>
                    </div>

                    <div class="register-user-input-block">
                      <textarea rows="5" cols="60" placeholder=' Summery ...'/>
                    </div>
                    <div className='register-sign-up'>
                    <button className='register-sign-up'>Submit</button>
                    </div>
                    
            </div>
                </div>
            </div>
        </div>     
  )
}
