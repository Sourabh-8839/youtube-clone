import React from 'react'

import { Helmet } from 'react-helmet'



const CustomHelmet = ({title='Youtube'}) => {
  return (
    <div>
      <Helmet>
<title>{title}</title>
      </Helmet>
    </div>
  )
}

export default CustomHelmet
