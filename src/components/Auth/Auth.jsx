import React, {useState} from 'react'
import { supabase } from '../../utils/supabase/supabaseClient';
import { auth } from '../../redux/actions/authAction';
import {image1, image2, image3, image4, image5} from '../../utils/imageHelper'
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

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

  const slideChange = () => {
    const images = document.querySelectorAll('.s-image');
    slider.slides.forEach((slide, index) => {
      slide.style.opacity = 0;
    })

    slider.slides[slider.activeIndex].style.opacity = 1;
  }

  return (
    <div className="formDiv flex h-screen w-full items-center justify-between bg-[#211F2C] bg-cover bg-no-repeat">
      <div className="w-full h-full flex items-center justify-center border">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          className="w-72"
          // spaceBetween={50}
          slidesPerView={1}
          onSlideChange={slideChange}
          onSwiper={(swiper) => setSlider(swiper)}
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide className="flex items-center justify-center h-80 w-80">
                <img src={image} alt="" srcset="" className="s-image w-full h-full" id={`img_${index}`}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* div
        <img src={image5} alt="" srcset="" className=""/> */}
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="h-72 w-52 bg-red-300"></div>
      </div>

      {/* {formState === "login" && (
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src={Logo} width="250" alt="" srcSet="" />
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
      )} */}
    </div>
  );
}

export default Auth