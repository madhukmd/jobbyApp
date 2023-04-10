import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'
const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="mobile-header-view">
        <img src={websiteLogo} alt="website logo" className="website-logo" />
        <ul className="nav-mobile-menu">
          <li className="align">
            <AiFillHome className="nav-mobile-icon" />
          </li>
          <li className="align">
            <BsFillBriefcaseFill className="nav-mobile-icon" />
          </li>
          <li>
            <button type="button" className="logout-icon-button align">
              <FiLogOut className="nav-mobile-icon" />
            </button>
          </li>
        </ul>
      </div>

      <div className="desktop-header-view">
        <img src={websiteLogo} alt="website logo" className="website-logo" />
        <ul className="nav-menu">
          <li className="nav-heading">Home</li>
          <li className="nav-heading">Jobs</li>
        </ul>
        <button type="button" className="logout">
          Logout
        </button>
      </div>
    </div>
  </nav>
)
export default Header
