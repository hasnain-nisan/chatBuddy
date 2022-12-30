import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase/supabaseClient'
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home/Home'
import { auth } from './redux/actions/authAction'
import { IoLogoIonitron } from "react-icons/io";
import {
  setPublicRooms,
  setPrivateRooms,
} from "./redux/actions/conversationAction";
import MobileView from './components/MobileView/MobileView'
import DesktopView from './components/DesktopView/DesktopView'

function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const user = useSelector((state) => state.authData.session);
  const menu = useSelector((state) => state.menuData.selectedMenu);

  const getSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    dispatch(auth(data?.session));
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
        .eq("is_group", true)

      let privateRoom = data.filter(data => data.participents.includes(user?.user.id));

      dispatch(setPrivateRooms(privateRoom));
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
      {loading ? (
        <div className="w-full h-screen bg-[#211F2C] cursor-pointer group flex flex-row gap-2 justify-center items-center p-5">
          <span className="flex items-center justify-center gap-3 animate-ping">
            <IoLogoIonitron
              fontSize={50}
              className="group-hover:text-teal-300 text-teal-400"
            />
            <h1 className="group-hover:text-teal-300 text-3xl font-popins font-bold text-teal-500">
              ChatBuddy
            </h1>
          </span>
        </div>
      ) : user ? (
        <>
          <MobileView />
          <DesktopView />
        </>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App
