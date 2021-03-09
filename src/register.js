import React, {Component} from 'react';
import './style.css'

class Register extends Component{
  render(){
    return(
    <div className = 'hello'>
      <h1>Register</h1>
      
      <input
        className = 'field'
        type = 'name'
        placeholder = 'Name'
      />
      <br/>

      <input
        className = 'field'
        type = 'address'
        placeholder  = 'Address'
      />
      <br/>

      <input
        className = 'field'
        type = 'contact'
        placeholder = 'Contact'
       />
      <br/>

      <input
        className = 'field'
        type = 'emali'
        placeholder = 'Email'
      />
      <br/>
      <a href='/'><button className = 'field btn-secondary'>
        Register
      </button>
      </a>
      
    </div>
     )
  }
}
export default Register;
 