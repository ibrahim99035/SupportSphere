// src/redux/storeSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const storeSlice = createSlice({
    name: 'stores',
    initialState: {
        stores: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchStoresStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchStoresSuccess: (state, action) => {
            state.loading = false;
            state.stores = action.payload;
        },
        fetchStoresFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addStore: (state, action) => {
            state.stores.push(action.payload);
        },
        updateStore: (state, action) => {
            const index = state.stores.findIndex(store => store.id === action.payload.id);
            if (index !== -1) {
                state.stores[index] = action.payload;
            }
        },
        deleteStore: (state, action) => {
            state.stores = state.stores.filter(store => store.id !== action.payload);
        },
    },
});

export const {
    fetchStoresStart,
    fetchStoresSuccess,
    fetchStoresFailure,
    addStore,
    updateStore,
    deleteStore,
} = storeSlice.actions;

export const fetchStores = () => async (dispatch) => {
    dispatch(fetchStoresStart());
    try {
        const response = await axios.get('/api/stores');
        dispatch(fetchStoresSuccess(response.data));
    } catch (error) {
        dispatch(fetchStoresFailure(error.response.data.message));
    }
};

export default storeSlice.reducer;