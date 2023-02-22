import React from 'react'
import PropTypes from 'prop-types';
import {displayVariable, subscript, superscript, eq1, eq2, eq3, quad} from '../equations.js'

const FinalPositionSolver = ({vars}) => {

  const { a, x1, v1, v2, t, units } = vars;

  let x2 = 0;

  if (t && v1 && x1) {

    x2 = Number(x1) + Number(v1*t) + Number(0.5*a*t**2)

    return (
      <div className='fc solved' >
        <div className='steps s1 fc ai-cen'>

          <div >STEP ONE: Pick your equation</div>
          <div>{eq2()}</div>

        </div>

        <div className='steps fc ai-cen'>
          <div>STEP TWO: Plug in your known variables</div>
          <div>{subscript('x', '2')} = {x1} + {v1}&#40;{t}&#41; + 0.5&#40;{a}&#41;&#40;{superscript(t, '2')}&#41;</div>
        </div>

        <div>{subscript('x', '2')} = {x2.toFixed(2)} m</div>

      </div>
    )

  } else if (t && v2 && x1) {
    x2 = Number(x1) + (v2 - 0.5*a*t) + 0.5*a*t**2
    let v1 = v2 - 0.5*a*t
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
          <div>{subscript('x', '2')} = {x1} + {v1}&#40;{t}&#41; + 0.5&#40;{a}&#41;&#40;{superscript(t, '2')}&#41;</div>
        </div>

        <div>{subscript('x', '2')} = {x2.toFixed(2)} m</div>

      </div>
    )

  } else if (v1 && v2 && x1) {
    x2 = Number(((v2**2) - (v1**2))/(a*2)) + Number(x1)

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
          <div>{subscript('x', '2')} = &#40;&#40;{v2}² - {v1}²&#41;/{-a*2}&#41; + {x1}</div>
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

FinalPositionSolver.propTypes = {
  vars: PropTypes.shape({
    a: PropTypes.string.isRequired,
    x1: PropTypes.string.isRequired,
    x2: PropTypes.string.isRequired,
    v1: PropTypes.string.isRequired,
    v2: PropTypes.string.isRequired,
    t: PropTypes.string.isRequired,
    units: PropTypes.oneOf(['metric', 'imperial']).isRequired,
  }).isRequired,
};

export default FinalPositionSolver

