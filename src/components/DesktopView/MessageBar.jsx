import React from 'react'
import { MdOutlineExpandMore, MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import MenuMessage from './MenuMessage';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const MessageBar = () => {
    const messages = [1, 1, 1, 1, 1, 2, 3, 3, 1, 34, 4, 3,3,3,3,3,3,3];

    const menu = useSelector((state) => state.menuData.selectedMenu);
    const publicRooms = useSelector((state) => state.conversationData.public_rooms);
    const privateRooms = useSelector((state) => state.conversationData.private_rooms);

    return (
      <div className="w-1/3 mt-1 mb-5">
        <div id="search" class="mx-auto mb-3">
          <div class="flex items-center w-[95%] h-12 rounded-lg bg-[#1E1C26] overflow-hidden p-1">
            <div class="grid place-items-center h-full w-12 text-teal-700">
              <MdSearch fontSize={18} />
            </div>
            <input
              class="peer h-full w-full outline-none text-sm text-teal-700 pr-2 bg-[#1E1C26] placeholder:text-teal-700 placeholder:text-sm"
              type="text"
              id="search"
              placeholder="Search.."
              autocomplete="off"
            />
          </div>
        </div>
        <div className="w-full h-[95%] scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-[#211F2C] rounded-md">
          <div id="msgContainer" className="w-[95%] flex flex-col gap-3 pb-5 ">
            {menu === "group" && (
              <>
                <Accordion
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <MdOutlineExpandMore
                        fontSize={15}
                        className="text-teal-500"
                      />
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
                    {privateRooms.map((room) => {
                      return <MenuMessage />;
                    })}
                  </AccordionDetails>
                </Accordion>

                {/* <p className="text-lg font-popins text-teal-600 ">Private rooms</p>
                {privateRooms.map((room) => {
                  return <MenuMessage />;
                })} */}
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default MessageBar