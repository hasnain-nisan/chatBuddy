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
  setAllUsers,
  setSingleConversations,
} from "./redux/actions/conversationAction";
import MobileView from './components/MobileView/MobileView'
import DesktopView from './components/DesktopView/DesktopView'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const user = useSelector((state) => state.authData.session);
  const menu = useSelector((state) => state.menuData.selectedMenu);
  const addModalOpen = useSelector((state) => state.menuData.addModalOpen)
  const singleConversations = useSelector(
    (state) => state.conversationData.single_conversations
  );

  const getSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    dispatch(auth(data?.session));
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    getAllUsers(data?.session?.user);
    getSingleConversations(data?.session?.user);
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

  const getSingleConversations = async (user) => {
    const { data, error } = await supabase
      .from("rooms")
      .select()
      .eq("is_private", true)
      .eq("is_group", false)

    let singleConversations = data.filter(data => data.participents.includes(user?.id));

    dispatch(setSingleConversations(singleConversations));
  };

  const getAllUsers = async (user) => {
    const { data, error } = await supabase
      .from("profiles")
      .select();

    setTimeout(() => {
      let allUsers = data.filter((data) =>
        data.id != user?.id
      );

      let conversation_user_id = [];
      singleConversations.forEach(conversation => {
        conversation.participents.forEach(participent => {
          if(participent !== user?.id){
            conversation_user_id.push(participent)
          }
        })
      })

      let filtered_users = allUsers.filter(data => !conversation_user_id.includes(data.id));
      dispatch(setAllUsers(filtered_users));
    }, 100)

  };

  useEffect(() => {
    getSession();
    // getSingleConversations();
  }, [])

  useEffect(() => {
    getSession();
    getPublicRooms()
    getPrivateRooms()
    getSingleConversations();
  }, [menu, addModalOpen])

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen bg-[#211F2C] cursor-pointer group flex flex-row gap-2 justify-center items-center p-5">
          <span className="flex items-center justify-center gap-3 animate-ping">
            <IoLogoIonitron
              fontSize={40}
              className="group-hover:text-teal-300 text-teal-400"
            />
            <h1 className="group-hover:text-teal-300 text-2xl font-popins font-bold text-teal-500">
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
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App
