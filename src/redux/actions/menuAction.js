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
