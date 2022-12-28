export const setPublicRooms = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_PUBLIC_ROOMS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setPrivateRooms = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_PRIVATE_ROOMS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setSelectedRoom = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_SELECTED_ROOM",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
