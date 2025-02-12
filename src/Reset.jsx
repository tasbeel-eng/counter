import { ResetIcon } from '@radix-ui/react-icons'
import React from 'react'

const Reset = ({setCount}) => {
    const handleReset=()=>{
      setCount(0);
    }
  return (
    <>
    <button className='reset-btn' onClick={handleReset}>
      <ResetIcon  className='reset-btn-icon'/>
      </button>
    </>

  )
}

export default Reset
