import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useState } from 'react'

const CountBtn = ({count, setCount}) => {
    
    const handleDecrease=()=>{
        if(count >0){
            setCount(count -1);
        }
        else{
            alert('Zero Limit Reached')
        }
        
        
    }
    const handleIncrease=()=>{
        setCount(count +1)
        
    }
  return (
    <div className='button-container'>
      <button className='count-btn'  onClick={handleDecrease} ><MinusIcon className='count-btn-icon'/></button>
      <button className='count-btn' onClick={handleIncrease}><PlusIcon className='count-btn-icon'/></button>
    </div>
  )
}

export default CountBtn
