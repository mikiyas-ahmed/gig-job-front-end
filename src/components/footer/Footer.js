import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
  } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='black' bgColor='light'>
          <MDBContainer className='p-4'>
          <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content.
                 Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Technologies Used</h6>
              <p>
                <a href='#!' className='text-reset'>
                React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Spring
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  BootStrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Git&Github
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Poznan, Greater Poland, Poland
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: '#fff' }}>
            © 2020 Copyright:
            <a className='text-black' href='exqmple.com'>
              example.com
            </a>
          </div>
        </MDBFooter>
      );
}
