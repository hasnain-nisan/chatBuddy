import React, {useState} from 'react'
import BottomNavigationBar from './BottomNavigationBar'
import Conversation from './Conversation'
import Home from './Home'

const MobileView = () => {

  const [menu, setMenu] = useState('home')

  return (
    <div className="w-full h-screen bg-[#252331]">
      {/* {menu === 'home' && <Home/>}
      <BottomNavigationBar menu={menu} setMenu={setMenu}/> */}
      <Conversation />
    </div>
  );
}

export default MobileView