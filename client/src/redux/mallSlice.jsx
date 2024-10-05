// src/redux/mallSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const mallSlice = createSlice({
    name: 'malls',
    initialState: {
        malls: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchMallsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchMallsSuccess: (state, action) => {
            state.loading = false;
            state.malls = action.payload;
        },
        fetchMallsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addMall: (state, action) => {
            state.malls.push(action.payload);
        },
        updateMall: (state, action) => {
            const index = state.malls.findIndex(mall => mall.id === action.payload.id);
            if (index !== -1) {
                state.malls[index] = action.payload;
            }
        },
        deleteMall: (state, action) => {
            state.malls = state.malls.filter(mall => mall.id !== action.payload);
        },
    },
});

export const {
    fetchMallsStart,
    fetchMallsSuccess,
    fetchMallsFailure,
    addMall,
    updateMall,
    deleteMall,
} = mallSlice.actions;

export const fetchMalls = () => async (dispatch) => {
    dispatch(fetchMallsStart());
    try {
        const response = await axios.get('/api/malls');
        dispatch(fetchMallsSuccess(response.data));
    } catch (error) {
        dispatch(fetchMallsFailure(error.response.data.message));
    }
};

export default mallSlice.reducer;