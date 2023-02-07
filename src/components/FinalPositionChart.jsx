import React from 'react'
import {displayVariable, subscript, superscript, eq1, eq2, eq3, quad} from './equations.js'
import DynamicChart from './DynamicChart.jsx'


const FinalPositionChart = ({vars}) => {

  let x2 = 0;
  console.log('Final position chart')
  if (vars.t && vars.v1 && vars.x1) {
    x2 = vars.x1 + vars.v1*vars.t + 0.5*vars.a*vars.t**2
    let timeLabels = [...Array(Math.ceil(vars.t) + 1).keys()]
    let xData = [];
    timeLabels.forEach(t => {
      let x = Number(vars.x1) + vars.v1*t + 0.5*vars.a*t**2
      xData.push(x.toFixed(2))
    })

    return (
    <DynamicChart
      data = {xData}
      xLabels = {timeLabels}
      titleLabel = {'Change in Position Over Time'}
      xAxisLabel = {'time (s)'}
      yAxisLabel = {'position (m)'}
      />
    )

  } else if (vars.t && vars.v2 && vars.x1) {
    x2 = Number(vars.x1) + (vars.v2 - 0.5*vars.a*vars.t)*vars.t + 0.5*vars.a*vars.t**2
    let timeLabels = [...Array(Math.ceil(vars.t) + 1).keys()]
    let xData = [];
    timeLabels.forEach(t => {
      let x = Number(vars.x1) + vars.v1*t + 0.5*vars.a*t**2
      xData.push(x.toFixed(2))
    })
    return (
    <DynamicChart
      data = {xData}
      xLabels = {timeLabels}
      titleLabel = {'Change in Position Over Time'}
      xAxisLabel = {'time (s)'}
      yAxisLabel = {'position (m)'}
      />
    )

  } else if (vars.v1 && vars.v2 && vars.x1) {
    x2 = Number(((vars.v2**2) - (vars.v1**2))/(vars.a*2)) + Number(vars.x1)

    let time = (vars.v2 - vars.v1)/vars.a
    let timeLabels = [...Array(Math.ceil(time) + 1).keys()]
    let xData = []
    timeLabels.forEach(t => {
      let x = Number(vars.x1) + vars.v1*t + 0.5 * vars.a * t**2
      xData.push(x.toFixed(2))
    })
    return (
    <DynamicChart
      data = {xData}
      xLabels = {timeLabels}
      titleLabel = {'Change in Position Over Time'}
      xAxisLabel = {'time (s)'}
      yAxisLabel = {'position (m)'}
      />
    )

  } else {
    return null
  }
}

export default FinalPositionChart
