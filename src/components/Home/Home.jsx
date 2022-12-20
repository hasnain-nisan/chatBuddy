import React, {useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getUser, getSession } from '../../utils/supabase/supaBaseHelper'
import MessageContainer from './MessageContainer';
import Sidebar from './Sidebar';

const Home = () => {

  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.authData.user);
  const [user, setUser] = useState(null);

  const getCurrentUser = async () => {
    let user = await getUser();
    if(user) setUser(user);
    else navigate("/");
  };

  const getCurrentSession = async () => {
    let user = await getSession();
    console.log(user);
  };

  useEffect(() => {
      getCurrentUser();
  }, [])
  return (
    <div class="flex h-screen antialiased text-gray-800">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <Sidebar/>
        <MessageContainer/>
      </div>
    </div>
  );
}

export default Home