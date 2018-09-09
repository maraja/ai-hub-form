import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/aihub.png'

const Header = props => (
  <header id="header">
    <Link to="/" className="logo">
      <img src={logo} style={{ height: 40 }} />
    </Link>
    {/*<nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>*/}
  </header>
)

Header.propTypes = {
  onToggleMenu: React.PropTypes.func,
}

export default Header
