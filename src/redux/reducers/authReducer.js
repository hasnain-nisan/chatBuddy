const authReducer = (
  authData = {
    session: null,
  },
  action
) => {
  switch (action.type) {
    case 'AUTH':
      return {
        ...authData,
        session: action.payload,
      };
    default:
      return authData;
  }
};

export default authReducer;
