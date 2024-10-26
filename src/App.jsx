import React from 'react'
import SplitScreen from './components/SplitScreen'

const LeftSideComp=()=>{
  return (
  <h1>Left Side</h1>
  )
}
const RightSideComp=()=>{
  return (
  <h1>Right Side</h1>
  )
}

const App = () => {
  return (
    <SplitScreen Left={LeftSideComp} Right={RightSideComp}/>
  )
}

export default App