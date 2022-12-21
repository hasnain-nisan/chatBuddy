import React, {useState} from 'react'
import { supabase } from '../../utils/supabase/supabaseClient';
import { auth } from '../../redux/actions/authAction';
import Logo from '../../assets/chatbuddy.png'
import { useDispatch } from 'react-redux';

const Auth = () => {

  const dispatch = useDispatch();

  const [formState, setFormState] = useState('login');
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeFormState = (type) => {
    setFormState(type);
    setUserName("");
    setEmail("");
    setPassword("");
  }

  const signIn = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if(error){
      console.log(error.message);
    } else {
      dispatch(auth(data.session));
    }
  }

  const signUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: userName
        },
      },
    });
    
    if (error) {
      console.log(error.message);
    } else {
      dispatch(auth(data.session));
    }
  }

  return (
    <div className="formDiv flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      {formState === "login" && (
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src={Logo} width="250" alt="" srcSet="" />
              {/* <h1 className="mb-2 text-2xl">Chat Buddy</h1> */}
              {/* <span className="text-gray-300">Enter Login Details</span> */}
            </div>
            <form action="#">
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 text-lg flex flex-col">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <a
                  type="button"
                  href="#"
                  className="underline  text-center text-[18px] mt-3 text-gray-300"
                  // onClick={() => setFormState("forgetPassword")}
                >
                  Forget the password?
                </a>
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                  onClick={(e) => signIn(e)}
                >
                  Login
                </button>
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <p className="text-gray-300">
                  New to here?
                  <a
                    type="button"
                    href="#"
                    className="ml-2 underline "
                    onClick={() => changeFormState("signUp")}
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
      {formState === "signUp" && (
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src={Logo} width="250" alt="" srcSet="" />
              {/* <h1 className="mb-2 text-2xl">Chat Buddy</h1> */}
              {/* <span className="text-gray-300">Enter Login Details</span> */}
            </div>
            <form action="#">
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="userName"
                  placeholder="Enter user name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 text-lg flex flex-col">
                <input
                  className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-300 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                  onClick={(e) => signUp(e)}
                >
                  Sign Up
                </button>
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <p className="text-gray-300">
                  Allready have an account?
                  <a
                    type="button"
                    href="#"
                    className="ml-2 underline"
                    onClick={() => changeFormState("login")}
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth