import React, {useState} from 'react'
import MessageBar from './MessageBar'
import MessageContainer from './MessageContainer'
import Drawer from "@mui/material/Drawer";
import DrawerSidebar from './DrawerSidebar';
import {BsFillCaretRightFill} from 'react-icons/bs'
import AddModal from './AddModal';

const MenuContainer = () => {

  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <div className="flex gap-4 p-5 lg:p-10 rounded-md w-full lg:w-4/5">
      <Drawer
        anchor={"left"}
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
      >
        <DrawerSidebar />
      </Drawer>
      <button
        className="absolute bg-teal-800 hover:bg-teal-400 z-10 rounded-full hidden md:block lg:hidden"
        style={{ top: "50%" }}
        onClick={() => setShowDrawer(true)}
      >
        <BsFillCaretRightFill fontSize={40}/>
      </button>
      <MessageBar />
      <MessageContainer />
      <AddModal/>
    </div>
  );
}

export default MenuContainer