import React from 'react'
import './NavBar.scss'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="/">Gig</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item">
                    <a class="nav-link" href='/'><i class="fas fa-tachometer-alt"></i>Home</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href='/about'><i class="far fa-address-book"></i>Jobs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='/project'><i class="far fa-clone"></i>log out</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" href='/contact'><i class="far fa-calendar-alt"></i>sign up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='/job-detail'><i class="far fa-chart-bar"></i>Charts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='/register'><i class="far fa-copy"></i>Documents</a>
                </li> */}
            </ul>
        </div>
    </nav>
  )
}
