import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('login')
        alert(`Email: ${email}, password: ${password}`)
      }
  return (
      <div className="rapper">
          <div className='box-container'>
              <h1>Login Form</h1>
              <div>
                  <button className='primary-button'>Login</button>
                  <button>Signup</button>
              </div>
              <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='extra-margin' type="email" placeholder='Email' />
              <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='extra-margin' type="password" placeholder='password' />
              <span>Forgot Password?</span>
              <button
                  onClick={handleLogin}
                  className='primary-button'>Login</button>
          </div>
      </div>
  )
}

export default Login
