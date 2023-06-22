import React from "react";
import './LoginForm.scss'

function LoginForm(){
     return (
        <div className="login-form-container">
            <div class="login-modal-container">
                <div class="login-modal-right">
                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt=""/>
                </div>
                <div class="login-modal-left">
                <h1 class="login-modal-title">Welcome!</h1>
                <p class="login-modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
                <div class="login-input-block">
                    <label for="email" class="login-input-label">Email</label>
                    <input type="email" name="email" id="email" placeholder="mikiyas@example.com"/>
                </div>
                <div class="login-input-block">
                    <label for="password" class="login-input-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    
                </div>
                
                <div class="login-modal-buttons">
                    <div>
                        <button class="login-input-button">Login</button>
                    </div>
                    <div>
                        <a href="">Forgot your password?</a>  
                    </div>     
                    <dv><p class="login-sign-up">Don't have an account? <a href="#">Sign up now</a></p></dv>             
                </div>
                
                </div>
            </div>
        </div>
     )
}
export default LoginForm;