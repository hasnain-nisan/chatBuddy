import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase/supabaseClient'
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home/Home'
import { auth } from './redux/actions/authAction'

function App() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authData.session);

  const getSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    dispatch(auth(data.session));
  };

  useEffect(() => {
    getSession();
  }, [])

  return (
    <div>
      {user ? <Home/> : <Auth/>}
    </div>
  )
}

export default App
