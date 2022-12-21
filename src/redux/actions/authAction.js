export const auth = (data) => async (dispatch) => {
    try {
        dispatch({
            type: 'AUTH',
            payload: data,
        });
    } catch (error) {
        console.log(error);
    }
};