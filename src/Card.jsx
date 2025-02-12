import React from 'react'
import { useState } from 'react'
import Count from './Count'
import CountBtn from './CountBtn'
import Reset from './Reset'
import Title from './Title'

const Card = () => {
    const[count, setCount]=useState(0)
  return (
    <div className='card'>
      <Title/>
      <Count count={count} setCount={setCount}/>
      <Reset  setCount={setCount}/>
      <CountBtn count={count} setCount={setCount}/>
    </div>
  )
}

export default Card
