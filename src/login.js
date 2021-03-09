import React, { Component } from 'react';
import './style.css'

class Login extends Component {
  render() {
    return (
      <div className='hello'>
        <h1>Login</h1>

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

        <a href='/register'>
          <button className='field btn-primary'>
            Login
         </button>
        </a>

        <div class="card" style={{ width: '18rem' }}>
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    )
  }
}
export default Login;
