import { useState } from "react";

export const Forms = () => {

    const [inputValue, setInputValue] = useState({
      	name: '',
      	lastName: '',
      	email: '',
      	pass: ''
    });

    const onInputChange = ({ target }) => {

      	setInputValue({
        	...inputValue,
        	[target.name] : target.value
      })
	
    }


    const onSubmit = (e) => {
        e.preventDefault();

		if (inputValue.name == '' || inputValue.lastName == '' || inputValue.email == '' || inputValue.pass == '') {
			alert('All fields must be complete')
		} else {
			setInputValue({})
			e.target.reset();
		}
    }


  return (
    <>
    <div className='form'>
        <div className="module1">
            <h2>Learn to code by watching others</h2>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
        </div>
        <div className="moduleForm">
            <button><strong>Try it free 7 days</strong> then $20/mo. thereafter</button>
            <form onSubmit={onSubmit} className='formContainer'>
              <input 
                  type="text" 
                  name="name" 
                  onChange={onInputChange} 
                  placeholder='First Name' />
              <input 
                  type="text" 
                  name="lastName" 
                  onChange={onInputChange} 
                  placeholder='Last Name' />
              <input 
                  type="email" 
                  name="email" 
                  onChange={onInputChange} 
                  placeholder='Email Address' />
              <input 
                  type="password" 
                  name="pass" 
                  onChange={onInputChange} 
                  placeholder='Password' />
              <button 
                  type="submit" 
                  className="claim">
                      CLAIM YOUR FREE TRIAL
              </button>
              <p className="formP">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>
    </div>
    </>
  )
}
