import React, {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useSelector, useDispatch} from 'react-redux'
import { setAddModalOpen } from "../../redux/actions/menuAction";
import {MdCancel} from 'react-icons/md'
import {FiUploadCloud} from 'react-icons/fi'
import Select from 'react-select';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderRadius: 5,
  bgcolor: "#1E1C26",
  border: "1px solid rgb(17 94 89)",
  boxShadow: 24,
  p: 5,
};


const AddModal = () => {

  const dispatch = useDispatch();
  const [image, setImage] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [participentsValue, setParticipentsValue] = useState([]);
  const [isPrivateGroup, setIsPrivateGroup] = useState(false);
  const addModalOpen = useSelector((state) => state.menuData.addModalOpen)
  const menu = useSelector((state) => state.menuData.selectedMenu);
  const allUsers = useSelector((state) => state.conversationData.all_users);
  
  // const participentsValue = [
  //   { value: 'chocolate', label: `<div>sd</div>` },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

  const setUserAsOptions = () => {
    let modUsers = [];
    allUsers.forEach((user) => {
      let data = {
        value: user.id,
        label: user.username
      }
    })
  }

  const colourStyles = {
    control: (styles) => ({ 
      ...styles, 
      backgroundColor: 'tranparent' ,
      border: `1px solid rgb(15 118 110)`,
      fontFamily: 'Poppins, sans-serif',
      text: 'rgb(15 118 110)'
    }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   const color = chroma(data.color);
    //   return {
    //     ...styles,
    //     backgroundColor: isDisabled
    //       ? undefined
    //       : isSelected
    //       ? data.color
    //       : isFocused
    //       ? color.alpha(0.1).css()
    //       : undefined,
    //     color: isDisabled
    //       ? '#ccc'
    //       : isSelected
    //       ? chroma.contrast(color, 'white') > 2
    //         ? 'white'
    //         : 'black'
    //       : data.color,
    //     cursor: isDisabled ? 'not-allowed' : 'default',

    //     ':active': {
    //       ...styles[':active'],
    //       backgroundColor: !isDisabled
    //         ? isSelected
    //           ? data.color
    //           : color.alpha(0.3).css()
    //         : undefined,
    //     },
    //   };
    // },
    // multiValue: (styles, { data }) => {
    //   const color = chroma(data.color);
    //   return {
    //     ...styles,
    //     backgroundColor: color.alpha(0.1).css(),
    //   };
    // },
    // multiValueLabel: (styles, { data }) => ({
    //   ...styles,
    //   color: data.color,
    // }),
    // multiValueRemove: (styles, { data }) => ({
    //   ...styles,
    //   color: data.color,
    //   ':hover': {
    //     backgroundColor: data.color,
    //     color: 'white',
    //   },
    // }),
  };

  const uploadFile = () => {
    let fileInput = document.getElementById('imageInput');
    fileInput.click();
  }

  const filePreview = (input) => {
    if (input.files && input.files[0]) {
      setImage(input.files[0])
      var reader = new FileReader();

      reader.onload = function (e) {
          document.getElementById('group-pic').src = e.target.result;
      }

      reader.readAsDataURL(input.files[0]);
    }
  }
  
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={addModalOpen}
        onClose={() => dispatch(setAddModalOpen(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="hidden md:block"
      >
        <Box sx={style}>
          <MdCancel
            className="absolute top-2 right-3 text-teal-700 hover:text-teal-500 cursor-pointer"
            fontSize={20}
            onClick={() => dispatch(setAddModalOpen(false))}
          />
          <div className="flex flex-col gap-10">
            <span className="text-2xl font-popins text-teal-500 underline">
              {menu === "home" && "Create conversation"}
              {menu === "group" && "Create group"}
            </span>
            <div className="flex flex-col gap-6 justify-center items-center">
              <input
                onChange={(e) => filePreview(e.target)}
                type="file"
                name=""
                id="imageInput"
                className="hidden"
              />
              {menu === "group" && (
                <>
                  <div
                    onClick={uploadFile}
                    className={`group flex flex-col gap-2 items-center justify-center w-36 h-36 bg-transparent rounded-full border-2 hover:border-teal-500 cursor-pointer ${
                      !image ? "border-teal-700" : "border-transparent"
                    }`}
                  >
                    {image ? (
                      <img
                        src=""
                        alt=""
                        srcset=""
                        id="group-pic"
                        className="rounded-full object-cover w-36 h-36"
                      />
                    ) : (
                      <>
                        <button className="group-hover:text-teal-500 text-teal-700">
                          <FiUploadCloud fontSize={30} className="" />
                        </button>
                        <p className="text-teal-700 group-hover:text-teal-500 font-popins text-sm">
                          Group Image
                        </p>
                      </>
                    )}
                  </div>
                  <div class="w-full">
                    <input
                      class="text-sm placeholder:text-sm font-popins placeholder:font-popins placeholder:text-teal-700 bg-transparent border-teal-700 hover:border-teal-500 hover:text-teal-500 hover:placeholder:text-teal-500 shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Group Name"
                      onChange={(e) => setGroupName(e.target.value)}
                      value={groupName}
                    />
                  </div>
                </>
              )}

              <div class="w-full">
                <Select
                  defaultValue={""}
                  isMulti={menu === "home" ? false : true}
                  name="colors"
                  options={participentsValue}
                  className=""
                  placeholder={
                    menu === "home"
                      ? "Select a user"
                      : "Select group participents"
                  }
                  classNamePrefix="select pa"
                  styles={colourStyles}
                />
                {/* <input
                  class="text-sm placeholder:text-sm font-popins placeholder:font-popins placeholder:text-teal-700 bg-transparent border-teal-700 hover:border-teal-500 hover:text-teal-500 hover:placeholder:text-teal-500 shadow appearance-none border rounded w-full py-2 px-3 text-teal-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Group Name"
                /> */}
              </div>

              <div className="w-full">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="w-full rounded bg-transparent border border-teal-700 hover:border-teal-500 px-4 py-2 placeholder:text-teal-700 placeholder:font-popins placeholder:hover:text-teal-500 font-popins text-teal-700 hover:text-teal-500 focus-within:border-teal-500 focus-visible:border-teal-500"
                  placeholder="Enter message"
                ></textarea>
              </div>

              {menu === "group" && (
                <div className="w-full">
                  <div class="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input
                      onChange={(e) => setIsPrivateGroup(e.target.checked)}
                      type="checkbox"
                      name="toggle"
                      id="toggle"
                      class="toggle-checkbox absolute block w-5 h-5 rounded-full bg-[#1E1C26] border-4 appearance-none cursor-pointer"
                    />
                    <label
                      for="toggle"
                      class="toggle-label block overflow-hidden h-5 rounded-full bg-teal-700 cursor-pointer"
                    ></label>
                  </div>
                  <label
                    for="toggle"
                    class={`text-xs font-popins ${
                      isPrivateGroup ? "text-teal-500" : "text-teal-700"
                    }`}
                  >
                    Set group to private
                  </label>
                </div>
              )}

              <div className="w-full">
                <button className="font-popins text-sm bg-teal-700 p-2 rounded-md text-[#1E1C26] hover:bg-teal-500">
                  Create
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddModal;
