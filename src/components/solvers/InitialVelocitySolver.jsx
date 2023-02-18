import React from 'react'
import {displayVariable, subscript, superscript, eq1, eq2, eq3, quad} from '../equations.js'


const InitialVelocitySolver = ({vars}) => {

  let v1 = 0;
  console.log('Initial Velocity')

  if (vars.t && vars.v2) {

    v1 = Number(vars.v2) - vars.a*vars.t

    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq1()}</div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = {subscript('v', '2')} - at</div>
        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Now solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = {vars.v2} - {vars.a}&#40;{vars.t}&#41;</div>
        </div>
        <div>{subscript('x', '2')} = {v1.toFixed(2)} m/s</div>

      </div>
    )

  } else if (vars.v2 && vars.x1 && vars.x2) {
    v1 = Math.sqrt(vars.v2**2 - 2*vars.a*(vars.x2-vars.x1))
    console.log(v1)
    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq3()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = ±√&#40;{subscript('v', '2')}² - 2a&#40;{subscript('x','2')} - {subscript('x','1')}&#41;&#41; </div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Now use equation three to solve for {subscript('x', '1')}</div>
          <div>{subscript('v', '1')} = ±√&#40;{vars.v2}² - 2&#40;{vars.a}&#41;&#40;{vars.x2} - {vars.x1}&#41;&#41; </div>
        </div>

        <div>{subscript('v', '1')} = ±{v1.toFixed(2)} m</div>

      </div>
    )

  } else if (vars.t && vars.x1 && vars.x2) {
    v1 = (vars.x2 - vars.x1)/vars.t - 0.5*vars.a*vars.t
    console.log(v1)

    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq2()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = &#40;{subscript('x', '2')} - {subscript('x', '1')}- 0.5at²&#41;/t </div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Now use equation three to solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = &#40;{vars.x2} - {vars.x1}- 0.5&#40;{vars.a}&#41;&#40;{vars.t}²&#41;&#41;/{vars.t}</div>
        </div>

        <div>{subscript('v', '1')} = {v1.toFixed(2)} m</div>

      </div>
    )

  } else {
    return (
      <div className='solved'></div>
    )
  }
}

export default InitialVelocitySolver

