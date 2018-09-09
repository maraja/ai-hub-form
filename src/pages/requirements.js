import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Aihub from '../components/Aihub'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <div>
    <Helmet>
      <title>AI HUB</title>
      <meta name="description" content="AI HUB" />
    </Helmet>

    <div id="main" className="alt">
      <Aihub />
    </div>
  </div>
)

export default Generic
