import React, {Component} from 'react';
import './style.css'

class Form extends Component{
  render(){
    return(
    <div className = 'hello'>
      <h1>Please fill up the form</h1>
      
      <input
        className = 'field'
        type = 'name'
        placeholder = 'name'
      />
      <br/>

      <input
        className = 'field'
        type = 'address'
        placeholder  = 'address'
        />

      <br/>

      <input
        className = 'field'
        type = 'contact'
        placeholder = 'contact'
       />
      <br/>

      <input
        className = 'field'
        type = 'emali'
        placeholder = 'email'
      />
      <br/>
      <button className = 'field'>
        Confirm
      </button>
      
    </div>
     )
  }
}
export default Form;
