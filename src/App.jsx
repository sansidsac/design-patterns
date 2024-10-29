import React from 'react'
import SplitScreen from './components/SplitScreen'
import Regular from './components/lists/Regular'
import {authors} from './data/authors'
import SmallListItems from './components/authors/SmallListItems'
import LargeListItems from './components/authors/LargeListItems'
import { books } from './data/books'
import { SmallBookListItem } from './components/books/SmallListItems'
import { LargeBookListItem } from './components/books/LargeListItems'
import { NumberedList } from './components/lists/Numbered'
import { Modal } from './components/Modal'

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
    <Modal>
      <LargeBookListItem book={books[0]}/>
    </Modal>
  </>
  )
}

export default App