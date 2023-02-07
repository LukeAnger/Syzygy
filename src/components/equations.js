import React from 'react'

export const displayVariable = (letter, sub, variable) => {
  sub = sub || ''
  let name = letter + sub
  let unit = ''
  if (letter.includes('x')) unit = ' m'
  else if (letter.includes('v')) unit = ' m/s'
  else if (letter === 'a') unit = ms2()
  else if (letter === 't') unit = ' s'
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '7rem'}}>
      <div>{subscript(letter, sub)} =</div>
      &nbsp;
      <div className={name} style={{marginLeft: '5px'}}>{variable?variable + unit:'--'}</div>
    </div>
  )
}

export let subscript = (letter, sub) => (
<span>{letter}<sub style={{fontSize: '0.6rem'}}>{sub}</sub></span>
)

export let superscript = (letter, sup) => (
<span>{letter}<sup style={{fontSize: '0.6rem'}}>{sup}</sup></span>
)

export let sqrtHTML = (string) => (
  <><span style={{fontSize: '1.1rem'}}>√</span><span className='sqrt' style={{borderTop: '1px solid black'}}>{string}</span></>
)

export let eq1 = () => (<div>{subscript('v', '2')} = {subscript('v', '1')} + at</div>)
export let eq2 = () => (<div>{subscript('x', '2')} = {subscript('x', '1')} + {subscript('v', '1')}t + 0.5a{superscript('t', '2')}</div>)
export let eq3 = () => (<div>{subscript('v', '2')}² = {subscript('v', '1')}² + 2a&#916;x </div>)
export let quad = () => (<div><div><span style={{borderBottom: '1px solid black'}}>-b ±<span style={{fontSize: '1.1rem'}}>√</span>
<span className='sqrt' style={{borderTop: '1px solid black'}}>
b² - 4ac</span></span></div><div style={{marginLeft: '30%'}}>2a</div></div>)


