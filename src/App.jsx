import React from 'react'
import SplitScreen from './components/SplitScreen'

const LeftSideComp=({title})=>{
  return (
  <h1 style={{backgroundColor:'red'}}>{title}</h1>
  )
}
const RightSideComp=({title})=>{
  return (
  <h1 style={{backgroundColor:'blue'}}>{title}</h1>
  )
}

const App = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={'Left'}/>
        <RightSideComp title={'Right'}/>
    </SplitScreen>
  )
}

export default App