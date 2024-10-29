import React from 'react'

const SmallListItems = ({author}) => {
    const {name, age} = author;
  return (
        <p>Name: {name}, Age: {age}</p>

  )
}

export default SmallListItems