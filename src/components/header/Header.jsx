import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { firebase } from '@firebase/app'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  document.title = 'Dashboard'

  const handeIsMobile = (e) => {
    e.preventDefault()
    setIsMobile(!isMobile)
  }

  if (window.innerWidth < 960) {
    if (!isMobile) {
      return (
        <div className='header-wrapper'>
          <div className='header'>
            <Link to='/'>
              <div className='header-title'>
                <span>EVALY</span>
              </div>
            </Link>
            <ul className='header-items'>
              <li className='header-item' onClick={handeIsMobile}>
                ᎒
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className='header-wrapper'>
          <div className='header'>
            <Link to='/'>
              <div className='header-title'>
                <span>EVALY</span>
              </div>
            </Link>
            <ul className='header-items'>
              <li className='header-item' onClick={handeIsMobile}>
                ᎒
              </li>
            </ul>
          </div>
          <div className='header-menu'>
            <Link to='/result'>
              <div className='header-menu-item'>
                <span>RESULT</span>
              </div>
            </Link>
            <div className='header-menu-item'>
              <span>HELP</span>
            </div>
            <div className='header-menu-item'>
              <span
                onClick={() => {
                  firebase.auth().signOut()
                }}
              >
                LOG OUT
              </span>
            </div>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div className='header-wrapper'>
        <div className='header'>
          <Link to='/'>
            <div className='header-title'>
              <span>EVALY</span>
            </div>
          </Link>
          <ul className='header-items'>
            <Link to='/result'>
              <li className='header-item'>RESULT</li>
            </Link>
            <li className='header-item'>HELP</li>
            <li
              className='header-item'
              onClick={() => {
                firebase.auth().signOut()
              }}
            >
              LOGOUT
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
