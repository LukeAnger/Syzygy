import React from 'react'
import {displayVariable, subscript, superscript, eq1, eq2, eq3, quad, sqrtHTML} from './equations.js'

import DynamicChart from './DynamicChart.jsx'

const FinalVelocityChart = ({vars}) => {
  let v2 = 0;
  console.log('Final Velocity Chart')
  if (vars.t && vars.v1) {

    v2 = Number(vars.v1) + vars.a*vars.t

    return (
<></>
    )

  } else if (vars.v1 && vars.x1 && vars.x2) {
    v2 = Math.sqrt(vars.v1**2 + 2*vars.a*(vars.x2-vars.x1))
    console.log(vars.v1**2 + 2*vars.a*(vars.x2-vars.x1))
    return (
<></>
    )

  } else {
    return null
  }
}

export default FinalVelocityChart

