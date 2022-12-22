import React, {useState} from 'react'
import BottomNavigationBar from './BottomNavigationBar'
import Home from './Home'

const MobileView = () => {

  const [menu, setMenu] = useState('home')

  return (
    <div className="w-full h-screen">
      {menu === 'home' && <Home/>}
      <BottomNavigationBar menu={menu} setMenu={setMenu}/>
    </div>
  )
}

export default MobileView