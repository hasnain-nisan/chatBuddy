const authReducer = (
  authData = {
    user: null,
    session: null
  },
  action
) => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...authData,
        user: action.payload.user,
        session: action.payload.session,
      };
    case 'LOGOUT':
      window.localStorage.removeItem("accessToken");
      return {
        ...authData,
        user: null,
        accessToken: null,
      };
    default:
      return authData;
  }
};

export default authReducer;
