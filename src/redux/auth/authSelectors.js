// redux/auth/authSelectors.js
export const getIsLoggedIn = (state) => state.auth.user !== null;
export const getUser = (state) => state.auth.user;

