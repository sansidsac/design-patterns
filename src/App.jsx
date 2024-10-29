import React from 'react'
import SplitScreen from './components/SplitScreen'
import Regular from './components/lists/Regular'
import {authors} from './data/authors'
import SmallListItems from './components/authors/SmallListItems'
import LargeListItems from './components/authors/LargeListItems'

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
  <>
    <Regular items={authors} sourceName={"author"} ItemComponent={SmallListItems}/>
    <Regular items={authors} sourceName={"author"} ItemComponent={LargeListItems}/>
  </>
  )
}

export default App