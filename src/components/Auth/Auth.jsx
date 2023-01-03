import React, {useState} from 'react'
import { supabase } from '../../utils/supabase/supabaseClient';
import { auth } from '../../redux/actions/authAction';
import {image1, image2, image3, image4, image5} from '../../utils/imageHelper'
import { useDispatch } from 'react-redux';
import { IoLogoIonitron } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import loginImage from '../../assets/login1.png'
import { toast } from 'react-toastify';

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";


const Auth = () => {

  const dispatch = useDispatch();

  const images = [image1, image2, image3, image4, image5]
  const [slider, setSlider] = useState(null);
  const [formState, setFormState] = useState('login');
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changeFormState = (type) => {
    setFormState(type);
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  const signIn = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if(error){
      toast.error(error.message);
    } else {
      dispatch(auth(data.session));
      toast.success('Login successfull');
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
      toast.error(error.message);
    } else {
      dispatch(auth(data.session));
      toast.success('Account created')
    }
  }

  const formSubmit = (e) => {
    formState === 'login' && signIn(e);
    formState === 'register' && signUp(e);
  }

  const slideChange = () => {
    const images = document.querySelectorAll('.s-image');
    slider.slides.forEach((slide, index) => {
      slide.style.opacity = 0;
    })

    slider.slides[slider.activeIndex].style.opacity = 1;
  }

  return (
    <section className="h-screen w-full bg-[#211F2C] md:p-10">
      <div className="px-6 h-full text-gray-800">
        <div className="flex  flex-col md:flex-row xl:justify-center lg:justify-between justify-center items-center h-full gap-10">
          <div className="hidden md:block max-w-lg grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-[40%] md:w-6/12 md:mb-0">
            <img
              src={loginImage}
              className="w-full lg:scale-150"
              alt="Sample image"
            />
          </div>
          <div className="rounded-3xl flex flex-col gap-5 bg-[#181725] p-10 xl:ml-20 xl:w-6/12 lg:w-6/12 md:w-6/12 max-w-md shadow-lg shadow-teal-800 md:mb-0 md:m-10 md:shrink-0 basis-auto">
            <div className="cursor-pointer group flex flex-row gap-2 justify-center items-center p-5">
              <IoLogoIonitron
                fontSize={50}
                className="group-hover:text-teal-300 text-teal-400"
              />
              <h1 className="group-hover:text-teal-300 text-3xl font-popins font-bold text-teal-500">
                ChatBuddy
              </h1>
            </div>
            <form className="flex flex-col gap-4 mt-3">
              {formState === "register" && (
                <div className="">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="bg-[#181725] hover:placeholder:text-teal-400 hover:border-teal-400 font-popins placeholder:font-popins form-control block w-full px-4 py-2 font-normal text-teal-700 bg-clip-padding border border-solid border-teal-700 placeholder:text-teal-700 placeholder:text-sm text-md rounded transition ease-in-out m-0 focus:text-teal-400 focus:bg-transparent focus:border-teal-300 focus:outline-none"
                    id="userName"
                    placeholder="User name"
                  />
                </div>
              )}

              <div className="">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="hover:placeholder:text-teal-400 hover:border-teal-400 bg-[#181725] font-popins placeholder:font-popins form-control block w-full px-4 py-2 font-normal text-teal-700 bg-clip-padding border border-solid border-teal-700 placeholder:text-teal-700 placeholder:text-sm text-md rounded transition ease-in-out m-0 focus:text-teal-400 focus:bg-transparent focus:border-teal-300 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="hover:border-teal-400 hover:placeholder:text-teal-400 bg-[#181725] font-popins placeholder:font-popins form-control block w-full px-4 py-2 font-normal text-teal-700 bg-clip-padding border border-solid border-teal-700 placeholder:text-teal-700 placeholder:text-sm text-md rounded transition ease-in-out m-0 focus:text-teal-400 focus:bg-transparent focus:border-teal-300 focus:outline-none"
                  id="password"
                  placeholder="Password"
                />
              </div>

              {formState === "forgetPassword" && (
                <div className="">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="hover:border-teal-400 hover:placeholder:text-teal-400 bg-[#181725] font-popins placeholder:font-popins form-control block w-full px-4 py-2 font-normal text-teal-700 bg-clip-padding border border-solid border-teal-700 placeholder:text-teal-700 placeholder:text-sm text-md rounded transition ease-in-out m-0 focus:text-teal-400 focus:bg-transparent focus:border-teal-300 focus:outline-none"
                    id="passwordConfirm"
                    placeholder="Confirm Password"
                  />
                </div>
              )}

              <div className="text-center lg:text-left mt-3 mb-2">
                <button
                  type="submit"
                  className="inline-block px-7 py-2 font-popins bg-teal-700 text-gray-900 text-sm leading-snug uppercase rounded shadow-md shadow-gray-900 hover:bg-teal-400 hover:shadow-lg focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={(e) => formSubmit(e)}
                >
                  {formState === "login" && "Login"}
                  {formState === "register" && "Register"}
                  {formState === "forgetPassword" && "Change Password"}
                </button>
              </div>

              <div>
                {formState === "login" && (
                  <p className="cursor-pointer text-sm font-popins mb-0 text-teal-700 hover:text-teal-400 group">
                    Don't have an account?
                    <button
                      onClick={() => changeFormState("register")}
                      className="ml-2 underline text-teal-600 group-hover:text-teal-300"
                    >
                      Register
                    </button>
                  </p>
                )}
                {formState === "forgetPassword" && (
                  <p className="cursor-pointer text-sm font-popins mb-0 text-teal-700 hover:text-teal-400 group">
                    Have an account?
                    <button
                      onClick={() => changeFormState("login")}
                      className="ml-2 underline text-teal-600 group-hover:text-teal-300"
                    >
                      Login
                    </button>
                  </p>
                )}
                {formState === "register" && (
                  <p className="cursor-pointer text-sm font-popins mb-0 text-teal-700 hover:text-teal-400 group">
                    Have an account?
                    <button
                      onClick={() => changeFormState("login")}
                      className="ml-2 underline text-teal-600 group-hover:text-teal-300"
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center ">
                {/* <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div> */}
                {formState !== "forgetPassword" && (
                  <button
                    onClick={() => changeFormState("forgetPassword")}
                    className="font-popins -mt-2 text-sm text-teal-700 hover:text-teal-400 cursor-pointer"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth