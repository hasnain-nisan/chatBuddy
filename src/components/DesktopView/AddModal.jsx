import React, {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useSelector, useDispatch} from 'react-redux'
import { setAddModalOpen } from "../../redux/actions/menuAction";
import {MdCancel} from 'react-icons/md'
import {FiUploadCloud} from 'react-icons/fi'
import { Select, CaretIcon, ModalCloseButton} from 'react-responsive-select';
import 'react-responsive-select/dist/react-responsive-select.css';
import { toast } from 'react-toastify';
import { supabase } from "../../utils/supabase/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { setSelectedRoom } from "../../redux/actions/conversationAction";
import { rgbToHex } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth > 768 ? 500 : window.innerWidth,
  height: window.innerWidth > 768 && "100%",
  borderRadius: 5,
  bgcolor:window.innerWidth > 768 ? "#1E1C26" : "rgb(37, 35, 49)",
  border: window.innerWidth > 768 && "1px solid rgb(17 94 89)",
  boxShadow: 24,
  p: 5,
};

const AddModal = () => {

  const dispatch = useDispatch();
  const [image, setImage] = useState(false)
  const [groupName, setGroupName] = useState("")
  const [participentsValue, setParticipentsValue] = useState([]);
  const [message, setMessage] = useState("");
  const [isPrivateGroup, setIsPrivateGroup] = useState(false);
  const addModalOpen = useSelector((state) => state.menuData.addModalOpen)
  const menu = useSelector((state) => state.menuData.selectedMenu);
  const user = useSelector((state) => state.authData.session);
  const allUsers = useSelector((state) => state.conversationData.all_users);

  const setMultiSelectOptions = () => {
    let modUsers = [{
      value: null,
      text: "Not selected",
      markup: <div class="flex justify-start items-center gap-3 bg-[#1E1C26]">
          <p className="text-red-700 font-popins">Select one</p>
        </div>
    }];
    allUsers?.forEach((user) => {
      let data = {
        value: user.id,
        text: user.username,
        markup: <div class="flex justify-start items-center gap-3 bg-[#1E1C26]">
          {user?.avatarurl ? (
            <img
              class="rounded-full items-start flex-shrink-0 object-cover"
              src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
              width="45"
              height="45"
              alt="Marie Zulfikar"
            />
          ) : (
            <span className="text-2xl font-bold font-popins bg-slate-400 px-2 h-8 w-8 rounded-full flex items-center justify-center border border-teal-600">
              <p className='uppercase'>{user?.username.charAt(0)}</p>
            </span>
          )}
          <div>
            <h4 class="text-[15px] font-semibold font-popins text-teal-700 hover:text-teal-500">
              {user?.username}
            </h4>
          </div>
        </div>
      }
      modUsers.push(data);
    })
    setParticipentsValue(modUsers)
  }

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

  const createConversation = async (selectedParticipent) => {
    const conversation = {
      id: uuidv4(),
      name: "Single conversation",
      created_at: moment().format(),
      is_group: false,
      is_private: true,
      participents: [
        user?.user.id,
        selectedParticipent 
      ]
    };

    const { error } = await supabase
    .from('rooms')
    .insert(conversation);

    return {
      error, 
      conversation
    };
  }

  const sendMessage = async (data) => {
    const msg = {
      id: uuidv4(),
      message: message,
      sender_id: user.user.id,
      room_id: data.id,
      created_at: moment().format(),
    };
    const { error } = await supabase.from("messages").insert(msg);
    setMessage("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(menu === "home"){
      let selectedParticipent = document.getElementsByName('selectBox')[0].value;
      if(!selectedParticipent){
        toast.error('Must select a participent')
      } else if(message === "") {
         toast.error('Message can not be empty')
      }

      let res = await createConversation(selectedParticipent);

      if(res.error){
        toast.error('Something went wrong')
      } else {
        await sendMessage(res.conversation)
        dispatch(setAddModalOpen(false))
        dispatch(setSelectedRoom(res.conversation))
        toast.success('Converation created')
      }
    }
  }

  useEffect(() => {
    setMultiSelectOptions()
  }, [addModalOpen])
  
  return (
    
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={addModalOpen}
        onClose={() => dispatch(setAddModalOpen(false))}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=""
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
                  className="bg-transparent"
                  name="selectBox"
                  multiselect={menu === 'home' ? false : true}
                  modalCloseButton={<ModalCloseButton />}
                  options={participentsValue}
                  // options={op}
                  caretIcon={<CaretIcon />}
                  prefix={
                    menu === "home"
                      ? "User: "
                      : "Group participents: "
                  }
                  onSubmit={() => console.log('onSubmit')}
                />
              </div>

              <div className="w-full">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="w-full rounded bg-transparent border border-teal-700 hover:border-teal-500 px-4 py-2 placeholder:text-teal-700 placeholder:font-popins placeholder:hover:text-teal-500 font-popins text-teal-700 hover:text-teal-500 focus-within:border-teal-500 focus-visible:border-teal-500"
                  placeholder="Enter message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                <button className="font-popins text-sm bg-teal-700 p-2 rounded-md text-[#1E1C26] hover:bg-teal-500"
                  onClick={(e) => handleFormSubmit(e)}
                >
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
