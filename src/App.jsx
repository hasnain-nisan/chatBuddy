import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase/supabaseClient'
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home/Home'
import { auth } from './redux/actions/authAction'
import { getPublicRooms } from './redux/actions/conversationAction'
import MobileView from './components/MobileView/MobileView'
import DesktopView from './components/DesktopView/DesktopView'

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authData.session);

  const getSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    dispatch(auth(data?.session));
  };

  const getPublicRoom = async (e) => {
    const { data, error } = await supabase
      .from("rooms")
      .select()
      .eq("slug", "shout-box");

    dispatch(getPublicRooms(data));
  }

  useEffect(() => {
    getSession();
    getPublicRoom();
  }, [])

  return (
    <div>
      {/* {user ? <Home/> : <Auth/>} */}
      {/* <MobileView/> */}
      <DesktopView/>
    </div>
  )
}

export default App
