import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initState,
  reducers: {
    add: (state, action) => {
      state.contacts.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { add, remove } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
