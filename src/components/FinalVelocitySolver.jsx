import React from 'react'
import {displayVariable, subscript, superscript, eq1, eq2, eq3, quad, sqrtHTML} from './equations.js'


const FinalVelocitySolver = ({vars}) => {
  let v2 = 0;
  console.log('Initial Velocity')
  if (vars.t && vars.v1) {

    v2 = Number(vars.v1) + vars.a*vars.t

    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq1()}</div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP TWO: Solve for {subscript('v', '2')}</div>
          <div>{subscript('v', '2')} = {subscript('v', '1')} + at</div>
        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Now solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '2')} = {vars.v1} + {vars.a}&#40;{vars.t}&#41;</div>
        </div>
        <div>{subscript('v', '2')} = {v2.toFixed(2)} m/s</div>

      </div>
    )

  } else if (vars.v1 && vars.x1 && vars.x2) {
    v2 = Math.sqrt(vars.v1**2 + 2*vars.a*(vars.x2-vars.x1))
    console.log(vars.v1**2 + 2*vars.a*(vars.x2-vars.x1))
    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq3()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '2')}</div>
          <div>{subscript('v', '2')} = ±<span style={{fontSize: '1.1rem'}}>√</span>
          <span className='sqrt' style={{borderTop: '1px solid black'}}>
          {subscript('v', '1')}² + 2a&#40;{subscript('x','2')} - {subscript('x','1')}&#41;
            </span> </div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Now use equation three to solve for {subscript('v', '2')}</div>
          <div>{subscript('v', '2')} = ±<span style={{fontSize: '1.1rem'}}>√</span>
          <span className='sqrt' style={{borderTop: '1px solid black'}}>
          {vars.v1}² + 2&#40;{vars.a}&#41;&#40;{vars.x2} - {vars.x1}&#41;
            </span> </div>
        </div>

        <div>{subscript('v', '2')} = ±{v2.toFixed(2)} m/s</div>

      </div>
    )

  } else {
    return (
      <div className='solved'></div>
    )
  }
}

export default FinalVelocitySolver

