import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase/supabaseClient'
import Auth from './components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import Home from './components/Home/Home'
import { auth } from './redux/actions/authAction'
import { getPublicRooms } from './redux/actions/conversationAction'
import MobileView from './components/MobileView/MobileView'

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
    (function () {
      var win = window,
        doc = win.document;

      // If there's a hash, or addEventListener is undefined, stop here
      if (!location.hash || !win.addEventListener) {
        //scroll to 1
        window.scrollTo(0, 1);
        var scrollTop = 1,
          //reset to 0 on bodyready, if needed
          bodycheck = setInterval(function () {
            if (doc.body) {
              clearInterval(bodycheck);
              scrollTop = "scrollTop" in doc.body ? doc.body.scrollTop : 1;
              win.scrollTo(0, scrollTop === 1 ? 0 : 1);
            }
          }, 15);

        if (win.addEventListener) {
          win.addEventListener(
            "load",
            function () {
              setTimeout(function () {
                //reset to hide addr bar at onload
                win.scrollTo(0, scrollTop === 1 ? 0 : 1);
              }, 0);
            },
            false
          );
        }
      }
    })();
  }, [])

  return (
    <div>
      {/* {user ? <Home/> : <Auth/>} */}
      <MobileView/>
    </div>
  )
}

export default App
