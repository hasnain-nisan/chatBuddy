import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase/supabaseClient'
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home/Home'
import { auth } from './redux/actions/authAction'
import {
  setPublicRooms,
  setPrivateRooms,
} from "./redux/actions/conversationAction";
import MobileView from './components/MobileView/MobileView'
import DesktopView from './components/DesktopView/DesktopView'

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authData.session);
  const menu = useSelector((state) => state.menuData.selectedMenu);

  const getSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    dispatch(auth(data?.session));
  };

  const getPublicRooms = async (e) => {
    const { data, error } = await supabase
      .from("rooms")
      .select()
      .eq("is_private", false)
      .eq("is_group", true);

    dispatch(setPublicRooms(data));
  }

    const getPrivateRooms = async (e) => {
      const { data, error } = await supabase
        .from("rooms")
        .select()
        .eq("is_private", true)
        .eq("is_group", true);

      dispatch(setPrivateRooms(data));
    };

  useEffect(() => {
    getSession();
  }, [])

  useEffect(() => {
    getPublicRooms()
    getPrivateRooms()
  }, [menu])

  return (
    <div>
      {
        user ? (
          <>
            <MobileView/>
            <DesktopView/>
          </>
        ) : <Auth/>
      }
    </div>
  )
}

export default App
