import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'
const Header = props => {
  const Logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    // console.log(props)
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="mobile-header-view">
          <Link to="/">
            <img
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
          </Link>
          <ul className="nav-mobile-menu">
            <li className="align">
              <Link to="/">
                <AiFillHome className="nav-mobile-icon" />
              </Link>
            </li>
            <li className="align">
              <Link to="/jobs">
                <BsFillBriefcaseFill className="nav-mobile-icon" />
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="logout-icon-button align"
                onClick={Logout}
              >
                <FiLogOut className="nav-mobile-icon" />
              </button>
            </li>
          </ul>
        </div>

        <div className="desktop-header-view">
          <img src={websiteLogo} alt="website logo" className="website-logo" />
          <ul className="nav-menu">
            <li className="nav-heading">
              <Link to="/" className="home-jobs-link">
                Home
              </Link>
            </li>
            <li className="nav-heading">
              <Link to="/jobs" className="home-jobs-link">
                Jobs
              </Link>
            </li>
          </ul>
          <button type="button" className="logout" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
