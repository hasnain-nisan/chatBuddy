import React from 'react'
import MenuContainer from './MenuContainer'
import MessageBar from './MessageBar'
import MessageContainer from './MessageContainer'
import Sidebar from './Sidebar'

const DesktopView = () => {
  return (
    <div className="w-full h-screen bg-[#211F2C] hidden md:flex">
      <Sidebar />
      <MenuContainer/>
    </div>
  );
}

export default DesktopView