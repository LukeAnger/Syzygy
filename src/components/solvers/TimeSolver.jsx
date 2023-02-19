import React from 'react'
import {displayVariable, subscript, superscript, eq1, eq2, quad} from '../equations.js'

const TimeSolver = ({vars}) => {

  let t = 0;
  if (vars.v1 && vars.v2) {
    t = (vars.v2 - vars.v1)/vars.a
    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>
          <div>STEP ONE: Pick your equation</div>
          <div>{eq1()}</div>
        </div>

        <div className='steps fc ai-cen'>
          <div>STEP TWO: Solve for t</div>
          <div>t = &#40;{subscript('v','2')} - {subscript('v', '1')}&#41;/a</div>
        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Plug in your known variables</div>
          <div>t = &#40;{vars.v2} m/s - {vars.v1} m/s&#41;/-9.82 m/s²</div>
        </div>

        <div>t = {t.toFixed(2)} s</div>
      </div>
    )
  } else if ((vars.v1 || vars.v1 === 0)  && (vars.x1 || vars.x1 === 0) && (vars.x2 || vars.x2 === 0)) {
    t = (-vars.v1 - Math.sqrt(vars.v1**2 - 2*vars.a*(vars.x1-vars.x2)))/vars.a
    console.log(Boolean(vars.v1))
    return (
      <div className='fc solved' >

        <div className='steps fc ai-cen'>

          <div>STEP ONE: Pick your equation</div>
          <div>{eq2()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Since we have t² and t we need to use the quadratic formula</div>
          <div>&#40;-b ± √&#40;b² + 4ac&#41;&#41;/2a</div>
          <div><b>a</b> = 0.5a = {0.5 * vars.a}, <b>b</b> = {subscript('v', '1')} = {vars.v1}, <b>c</b> = {subscript('x', '1')} - {subscript('x', '2')} = {-vars.x1}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP THREE: Plug in your known variables</div>
          <div>t = &#40;-{vars.v1} + √&#40;{vars.v1}² - 4 &#40;{0.5 * vars.a}&#41; &#40;{vars.x1}&#41; &#41; &#41;/2 &#40;{0.5 * vars.a}&#41;</div>

        </div>

        <div>t = {t.toFixed(2)} s</div>

      </div>
    )
  } else {
    return (
      <div className='solved'></div>
    )
  }
}

export default TimeSolver