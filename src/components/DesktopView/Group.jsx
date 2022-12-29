import React from 'react'
import MenuMessage from "./MenuMessage";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useSelector } from 'react-redux';
import { MdOutlineExpandMore } from "react-icons/md";

const Group = () => {

    const publicRooms = useSelector(
      (state) => state.conversationData.public_rooms
    );
    const privateRooms = useSelector(
      (state) => state.conversationData.private_rooms
    );

  return (
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
          {privateRooms?.map((room) => {
            return <MenuMessage key={room.id} room={room}/>;
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Group