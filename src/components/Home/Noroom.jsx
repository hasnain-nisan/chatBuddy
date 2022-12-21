import React from 'react'
import noroomImage from '../../assets/noroom.png'

const Noroom = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <img src={noroomImage} alt="" srcset="" />
      <p className="text-3xl tracking-[2px] text-center">
        Select a conversation to start chatting
      </p>
    </div>
  );
}

export default Noroom