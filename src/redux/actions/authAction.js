
export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({
      type: AUTH,
      payload: data?.accessToken,
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (data) => async (dispatch) => {
    console.log(data);
    try {
        dispatch({
            type: 'AUTH',
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => async (dispatch) => {
  try {
    await api.logout();
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};
