const menuReducer = (
  menuData = {
    selectedMenu: 'home',
    addModalOpen: false,
  },
  action
) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...menuData,
        selectedMenu: action.payload,
      };
    case 'SET_ADD_MODAL_OPEN':
      return {
        ...menuData,
        addModalOpen: action.payload,
      };
    default:
      return menuData;
  }
};

export default menuReducer;
