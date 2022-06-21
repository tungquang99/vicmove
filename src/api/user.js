import { loginError, loginStart, loginSuccess } from "../Auth/authSlice";

export const loginUser = async(user, dispatch, navigate) => {
    await dispatch(loginStart());

    try {
       await dispatch(loginSuccess(user));
        navigate('/vicmove/');
    } catch (error) {
        await dispatch(loginError(error));
    }
}