const menuReducer = (
  menuData = {
    selectedMenu: 'home',
  },
  action
) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...menuData,
        selectedMenu: action.payload,
      };
    default:
      return menuData;
  }
};

export default menuReducer;
