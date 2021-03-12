import React, { Component } from 'react';
import './style.css'
import Logo from './images/logo.jpg'

class Register extends Component {
  render() {
    return (
      <div className='hello' style={{textAlign: 'center'}}>
         <div className='images'>
         <a href='/home'><img className='logo' src={Logo} style={{ height: '120px', widths: '120px' }} /></a>
        </div>
        <div className='ocard' style={{ paddingLeft: '590px' }}>
          <div class="card" style={{ width: '18rem', borderRadius: '30px'}}>
            <div class="card-header">
              <h4>Register </h4>
            </div>
            <div class="card-body">
              <input
                className='field'
                type='Name'
                placeholder='Name'
              />
              <br />
              <input
                className='field'
                type='Email'
                placeholder='Email'
              />
              <br />
              <input
                className='field'
                type='Phone Number'
                placeholder='Phone Number'
              />
              <br />
              <input
                className='field'
                type='Username'
                placeholder='Username'
              />
              <br />
              <input
                className='field'
                type='Password'
                placeholder='Password'
              />
              <br />
              <a href='/'><button className='button btn-dark'>Register</button></a>
              <a href='/home'><button className='button btn-dark'>home</button></a>
            </div>
          </div>
        </div>
          {/* Footer */}
          <footer className='foots'>
          </footer>
      </div> 
    )
  }
}
export default Register;
