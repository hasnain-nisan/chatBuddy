import React, {useState} from 'react'
import BottomNavigationBar from './BottomNavigationBar'
import Conversation from './Conversation'
import Home from './Home'

const MobileView = () => {

  const [menu, setMenu] = useState('home')
  const [isConverSation, setIsConversation] = useState(false);

  return (
    <div className="w-full h-screen bg-[#252331] block md:hidden">
      {!isConverSation ? (
        <>
          {menu === "home" && (
            <>
              <Home setIsConversation={setIsConversation} />
              <BottomNavigationBar menu={menu} setMenu={setMenu} />
            </>
          )}
        </>
      ) : (
        <Conversation setIsConversation={setIsConversation} />
      )}
    </div>
  );
}

export default MobileView