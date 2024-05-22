import { setLoggedIn, setUserId } from './authSlice';

export const login = (userId) => (dispatch) => {
  dispatch(setUserId(userId));
  dispatch(setLoggedIn(true));
  localStorage.setItem("uid", userId);
};

export const logout = () => (dispatch) => {
  dispatch(setUserId(null));
  dispatch(setLoggedIn(false));
  localStorage.removeItem("uid");
};
