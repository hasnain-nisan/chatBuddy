import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import BottomNavigationBar from './BottomNavigationBar'
import Conversation from './Conversation'
import Home from './Home'
import MessageBar from './MessageBar'

const MobileView = () => {

  const [menu, setMenu] = useState('home')
  const [isConverSation, setIsConversation] = useState(false);
  const selected_room = useSelector((state) => state.conversationData.selected_room)

  return (
    <div className="w-full h-screen bg-[#252331] block md:hidden">
      {!selected_room ? (
        <>
          <MessageBar setIsConversation={setIsConversation} />
          <BottomNavigationBar menu={menu} setMenu={setMenu} />
        </>
      ) : (
        <Conversation setIsConversation={setIsConversation} />
      )}
    </div>
  );
}

export default MobileView