import { useState } from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '@firebase/app'
// These imports load individual services into the firebase namespace.
import 'firebase/auth'

import './SignIn.scss'

import FormBG from '../../static/images/form-bg.png'

export default function SignIn() {
  document.title = 'Sign In'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = () => {
    if (email === "admin@admin.com") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user
          // ...
        })
        .catch((error) => {
          alert(error.message)
        })
    } else {
      alert("Email is not associated with any admin")
    }
  }

  return (
    <div className='signin-wrapper'>
      <div className='signin-bg-image'>
        <img src={FormBG} alt='Form background' />
      </div>
      <div className='signin-form'>
        <form>
          <div className='signin-row-1'>
            <span>Sign In</span>
          </div>
          <div className='signin-row-2'>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder='Email Address'
            />
          </div>
          <div className='signin-row-3'>
            <input
              type='password'
              name='password'
              id='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='Password'
            />
          </div>

          <div className='signin-row-4'>
            <input
              type='submit'
              name='submit-btn'
              id='submit-btn'
              value='Sign In'
              onClick={signIn}
            />
          </div>

          <div className='signin-row-5'>
            <span className='signin-row-5-item'>
              Don't have an account yet?
            </span>

            <span className='signin-row-5-item'>
              <Link to='/signup'>Sign Up</Link>
            </span>
            <span className='signin-row-5-item'>here</span>
          </div>
        </form>
      </div>
    </div>
  )
}
