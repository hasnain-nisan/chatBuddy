import React, { useEffect, useState } from 'react'
import MenuMessage from "./MenuMessage";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useSelector } from 'react-redux';
import { MdOutlineExpandMore } from "react-icons/md";
import {CgDanger} from 'react-icons/cg'
import { IoLogoIonitron } from 'react-icons/io';

const Group = () => {

    const [loading, setLoading] = useState(false);
    const publicRooms = useSelector(
      (state) => state.conversationData.public_rooms
    );
    const privateRooms = useSelector(
      (state) => state.conversationData.private_rooms
    );
    const menu = useSelector((state) => state.menuData.selectedMenu);
    const addModalOpen = useSelector((state) => state.menuData.addModalOpen)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [menu, addModalOpen])

  return (
    loading ? (
      <div className='w-full flex items-start justify-center mt-10'>
          <span className="flex items-center justify-center gap-3 animate-ping">
              <IoLogoIonitron
                  className="group-hover:text-teal-300 text-teal-400" 
              />
              <h1 className="group-hover:text-teal-300 text-sm font-popins font-bold text-teal-500">
                  Loading...
              </h1>
          </span>
      </div>
    ) : (
      <div>
        {/* public_rooms */}
        <Accordion
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              <MdOutlineExpandMore fontSize={15} className="text-teal-500" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              padding: "0px",
              color: "rgb(20 184 166)",
            }}
          >
            <p className="font-popins">Public Rooms</p>
          </AccordionSummary>
          <AccordionDetails
            style={{
              padding: "0px",
            }}
          >
            {publicRooms?.map((room) => {
              return <MenuMessage key={room.id} room={room}/>;
            })}
          </AccordionDetails>
        </Accordion>
  
        {/* private_rooms */}
        <Accordion
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={
              <MdOutlineExpandMore fontSize={15} className="text-teal-500" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{
              padding: "0px",
              color: "rgb(20 184 166)",
            }}
          >
            <p className="font-popins">Private Rooms</p>
          </AccordionSummary>
          <AccordionDetails
            style={{
              padding: "0px",
            }}
          >
            {privateRooms.length > 0 ? (
              privateRooms?.map((room) => {
                return <MenuMessage key={room.id} room={room}/>;
              })) : (
                <span className='flex items-center justify-start gap-2 px-2'>
                  <CgDanger fontSize={20} className="text-red-500"/>
                  <p className='text-red-500 font-popins text-sm'>No group found</p>
                </span>
              )
            }
          </AccordionDetails>
        </Accordion>
      </div>
    )

  );
}

export default Group