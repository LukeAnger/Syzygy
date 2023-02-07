import React from 'react';
import {displayVariable, subscript, superscript} from './equations.js'

const Variables = ({vars}) => {
  console.log('IN VARIABLES: ', vars.t)
  return(
    <div id='variables' className='variables fr jc-sb' >

      <div className='fc jc-sb'>
        {displayVariable('x', '1', vars.x1)}

        {displayVariable('x', '2', vars.x2)}
      </div>

      <div className='fc jc-sb'>
        {displayVariable('v', '1', vars.v1)}

        {displayVariable('v', '2', vars.v2)}
      </div>

      <div className='fc jc-sb'>
        {displayVariable('t', '', vars.t)}

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '7rem'}}>
          <div>a =</div>
          &nbsp;
          <div className='acceleration' style={{marginLeft: '5px'}}> -9.8 m/s<sup>2</sup></div>
        </div>
      </div>







    </div>

    )

};

export default Variables;


