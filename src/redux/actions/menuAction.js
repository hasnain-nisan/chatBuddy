export const setMenu = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_MENU",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setAddModalOpen = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_ADD_MODAL_OPEN",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
