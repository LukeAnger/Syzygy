import React, {useState} from 'react';
import VariableNames from './components/VariableNames.jsx'
import Equations from './components/Equations.jsx'
import Notepad from './components/Notepad.jsx'

import FreeBody from './components/FreeBody.jsx'
import SyzygyLogo from './components/SyzygyLogo.jsx'
// import Storymode from './components/Storymode.jsx'

import TimeSolver from './components/TimeSolver.jsx'
import InitialPositionSolver from './components/InitialPositionSolver.jsx'
import FinalPositionSolver from './components/FinalPositionSolver.jsx'
import InitialVelocitySolver from './components/InitialVelocitySolver.jsx'
import FinalVelocitySolver from './components/FinalVelocitySolver.jsx'
import NoQuestionMark from './components/NoQuestionMark.jsx'
import FFKin from './components/FFKin.jsx'
import TimeChart from './components/TimeChart.jsx'
import InitialPositionChart from './components/InitialPositionChart.jsx'
import FinalPositionChart from './components/FinalPositionChart.jsx'
import InitialVelocityChart from './components/InitialVelocityChart.jsx'
import FinalVelocityChart from './components/FinalVelocityChart.jsx'
import ManualInput from './components/ManualInput.jsx'
import Header from './components/Header.jsx'
import {apple, treeOak, logo} from './components/svgs.js'







const varObj = {
  a: '-9.82',
  x1: '', x2: '',
  v1: '', v2: '',
  t: '', units: 'metric'
}

const App = () => {

  const [variables, setVariables] = useState(varObj)
  const [animate, setAnimate] = useState(0)
  const [showScene, setShowScene] = useState(false)


  let empty = (variables.x1 === '' && variables.x2 === '' && variables.v1 === '' && variables.v2 === '' && variables.t === '')
  const onChangeVariables = (obj) => {
    setVariables(obj)
  }

  let resetVars = () => {
    setVariables({
      a: '-9.82',
      x1: '', x2: '',
      v1: '', v2: '',
      t: '', units: 'metric'
    })
  }
  let animationType = () => {

    if (animate !== 0) setAnimate(0)
    else if (variables.v1 > 0) setAnimate(1)
    else if (variables.v1 == 0) setAnimate(2)
    else if (variables.v1 < 0) setAnimate(3)
  }

  return(
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '95vh', width: '95vw'}}>
      <SyzygyLogo />
      <FFKin vars={variables} />
      <div className='fr eqs-vars'>

        <VariableNames />
        {/* <Notepad /> */}
        <Equations />

      </div>

      <div className='maths fr jc-sb'>

        <ManualInput vars={variables} onChangeVariables={onChangeVariables} animationType={animationType} resetVars={resetVars}/>
        {/* <Equation vars={variables} solvedVariables={solvedVariables}/> */}
        {variables.t == '?' ? <TimeSolver vars={variables} /> : null}
        {variables.x1 == '?' ? <InitialPositionSolver vars={variables} /> : null}
        {variables.x2 == '?' ? <FinalPositionSolver vars={variables} /> : null}
        {variables.v1 == '?' ? <InitialVelocitySolver vars={variables} /> : null}
        {variables.v2 == '?' ? <FinalVelocitySolver vars={variables} /> : null}
        { empty ? <NoQuestionMark vars={variables} /> : null}

      </div>


      <div className='diagrams fr'>

        <div id='scene'>

            {/* {showScene ? treeOak(animate, animationType) : <Storymode vars={variables} onChangeVariables={onChangeVariables}/>} */}
        </div>

        <div id='free-body'>

          {variables.t == '?' ? <TimeChart vars={variables} /> : null}
          {variables.x1 == '?' ? <InitialPositionChart vars={variables} /> : null}
          {variables.x2 == '?' ? <FinalPositionChart vars={variables} /> : null}
          {variables.v1 == '?' ? <InitialVelocityChart vars={variables} /> : null}
          {variables.v2 == '?' ? <FinalVelocityChart vars={variables} /> : null}

        </div>
      </div>

    </section>
    )

};

export default App;


