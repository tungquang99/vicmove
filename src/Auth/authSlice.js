import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    loading: false,
    error: ''
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.token = action.payload.user[0].token;
            localStorage.setItem('token', state.token);
        },
        loginError: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        logout: (state, action) => {
            state = initialState;
            localStorage.removeItem('token');
        }
     }, 
})

export const { loginStart, loginSuccess, loginError, logout } = authSlice.actions;

export default authSlice.reducer;