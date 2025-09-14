import api from './api';
import {
  loginRequest,
  loginSuccess,
  loginFail,
  registerRequest,
  registerSuccess,
  registerFail,
  logout,
} from '../redux/slices/authSlice';

// Login user
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const { data } = await api.post('/users/login', { email, password });

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(
      loginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Register user
export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const { data } = await api.post('/users', userData);

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(
      registerFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

// Logout user
export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

// Get user profile
export const getUserProfile = async () => {
  const { data } = await api.get('/users/profile');
  return data;
};

// Update user profile
export const updateUserProfile = async (userData) => {
  const { data } = await api.put('/users/profile', userData);
  return data;
};
