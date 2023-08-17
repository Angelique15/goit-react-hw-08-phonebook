// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth/authSlice'; // Your auth reducer
import contactsReducer from './contacts/contactsSlice'; // Your contacts reducer

// Combine your reducers
const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    // ...other reducers
});

// Apply middleware (including thunk)
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

