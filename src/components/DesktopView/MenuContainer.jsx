import React from 'react'
import MessageBar from './MessageBar'
import MessageContainer from './MessageContainer'

const MenuContainer = () => {
  return (
    <div className='flex gap-4 p-5 lg:p-10 rounded-md w-full lg:w-4/5'>
        <MessageBar/>
        <MessageContainer/>
    </div>
  )
}

export default MenuContainer