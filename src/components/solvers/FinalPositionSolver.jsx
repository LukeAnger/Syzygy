import React from 'react'
import {displayVariable, subscript, superscript, eq1, eq2, eq3, quad} from '../equations.js'

const FinalPositionSolver = ({vars}) => {

  let x2 = 0;
  console.log('Final POSITION')
  if (vars.t && vars.v1 && vars.x1) {
    console.log('test')
    x2 = Number(vars.x1) + Number(vars.v1*vars.t) + Number(0.5*vars.a*vars.t**2)
    console.log(x2)
    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq2()}</div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP TWO: Plug in your known variables</div>
          <div>{subscript('x', '2')} = {vars.x1} + {vars.v1}&#40;{vars.t}&#41; + 0.5&#40;{vars.a}&#41;&#40;{superscript(vars.t, '2')}&#41;</div>
        </div>

        <div>{subscript('x', '2')} = {x2.toFixed(2)} m</div>

      </div>
    )

  } else if (vars.t && vars.v2 && vars.x1) {
    x2 = Number(vars.x1) + (vars.v2 - 0.5*vars.a*vars.t) + 0.5*vars.a*vars.t**2
    let v1 = vars.v2 - 0.5*vars.a*vars.t
    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq1()} to solve for {subscript('v', '1')}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('v', '1')}</div>
          <div>{subscript('v', '1')} = {subscript('v', '2')} - 0.5at</div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Now use equation three to solve for {subscript('x', '1')}</div>
          <div>{subscript('x', '2')} = {vars.x1} + {v1}&#40;{vars.t}&#41; + 0.5&#40;{vars.a}&#41;&#40;{superscript(vars.t, '2')}&#41;</div>
        </div>

        <div>{subscript('x', '2')} = {x2.toFixed(2)} m</div>

      </div>
    )

  } else if (vars.v1 && vars.v2 && vars.x1) {
    x2 = Number(((vars.v2**2) - (vars.v1**2))/(vars.a*2)) + Number(vars.x1)

    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq3()}</div>

        </div>

        <div className='steps fc ai-cen'>

          <div>STEP TWO: Solve for {subscript('x', '1')}</div>
          <div>{subscript('x', '2')} = &#40;&#40;{subscript('v','2')}² - {subscript('v','1')}²&#41;/2a&#41; + {subscript('x','1')}</div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP THREE: Now use equation three to solve for {subscript('x', '1')}</div>
          <div>{subscript('x', '2')} = &#40;&#40;{vars.v2}² - {vars.v1}²&#41;/{-vars.a*2}&#41; + {vars.x1}</div>
        </div>

        <div>{subscript('x', '2')} = {x2.toFixed(2)} m</div>

      </div>
    )

  } else {
    return (
      <div className='solved'></div>
    )
  }
}

export default FinalPositionSolver

