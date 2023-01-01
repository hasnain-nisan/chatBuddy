const conversationReducer = (
  conversationData = {
    public_rooms: null,
    private_rooms: null,
    selected_room: null,
    all_users: null,
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
    case "SET_ALL_USERS":
      return {
        ...conversationData,
        all_users: action.payload,
      };
    default:
      return conversationData;
  }
};

export default conversationReducer;
