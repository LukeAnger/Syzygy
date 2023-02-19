import React, {useState} from 'react';
import { Charts } from './components/Charts.js'
import { Solvers } from './components/Solvers.js'
import { Static } from './components/Static.js'
import FreeBody from './components/FreeBody.jsx'
import Storymode from './components/Storymode.jsx'
import ManualInput from './components/ManualInput.jsx'
import {apple, treeOak, logo} from './components/svgs.js'
// import Notepad from './components/Notepad.jsx' bug testing 2/15/2023

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

  const resetVars = () => {
    setVariables({
      a: '-9.82',
      x1: '', x2: '',
      v1: '', v2: '',
      t: '', units: 'metric'
    })
  }
  const animationType = () => {

    if (animate !== 0) setAnimate(0)
    else if (variables.v1 > 0) setAnimate(1)
    else if (variables.v1 == 0) setAnimate(2)
    else if (variables.v1 < 0) setAnimate(3)
  }

  return(
    <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '95vh', width: '95vw'}}>
      <Static.SyzygyLogo />
      <Static.FFKinHeader vars={variables} />
      <div className='fr eqs-vars'>

        <Static.VariableNames />
        {/* <Notepad /> */}
        <Static.Equations />

      </div>

      <div className='maths fr jc-sb'>

        <ManualInput vars={variables} onChangeVariables={onChangeVariables} animationType={animationType} resetVars={resetVars}/>

        {variables.t == '?' ? <Solvers.TimeSolver vars={variables} /> : null}

        {variables.x1 == '?' ? <Solvers.InitialPositionSolver vars={variables} /> : null}

        {variables.x2 == '?' ? <Solvers.FinalPositionSolver vars={variables} /> : null}

        {variables.v1 == '?' ? <Solvers.InitialVelocitySolver vars={variables} /> : null}

        {variables.v2 == '?' ? <Solvers.FinalVelocitySolver vars={variables} /> : null}

        { empty ? <Static.NoQuestionMark vars={variables} /> : null}

      </div>


      <div className='diagrams fr'>

        <div id='scene'>

            {showScene ? treeOak(animate, animationType) : <Storymode vars={variables} onChangeVariables={onChangeVariables}/>}
        </div>

        <div id='free-body'>

          {variables.t == '?' ? <Charts.TimeChart vars={variables} /> : null}
          {variables.x1 == '?' ? <Charts.InitialPositionChart vars={variables} /> : null}
          {variables.x2 == '?' ? <Charts.FinalPositionChart vars={variables} /> : null}
          {variables.v1 == '?' ? <Charts.InitialVelocityChart vars={variables} /> : null}
          {variables.v2 == '?' ? <Charts.FinalVelocityChart vars={variables} /> : null}

        </div>
      </div>

    </section>
    )

};

export default App;


