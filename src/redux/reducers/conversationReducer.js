const conversationReducer = (
  conversationData = {
    public_rooms: null,
    private_rooms: null,
    selected_room: null
  },
  action
) => {
  switch (action.type) {
    case "SET_PUBLIC_ROOMS":
      return {
        ...conversationData,
        public_rooms: action.payload,
      };
    case "SET_PRIVATE_ROOMS":
      return {
        ...conversationData,
        private_rooms: action.payload,
      };
    case "SET_SELECTED_ROOM":
      return {
        ...conversationData,
        selected_room: action.payload,
      };
    default:
      return conversationData;
  }
};

export default conversationReducer;
