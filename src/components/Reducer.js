import { createReducer } from "@reduxjs/toolkit";

export const DataReducer = createReducer({ loading: false, allTickets: [], allUser: [] }, {
    DATA_REQUEST: (state) => ({ ...state, loading: true }),
    DATA_SUCCESS: (state, { payload }) => ({
        ...state,
        loading: false,
        allTickets: payload.tickets,
        allUser: payload.users,
    }),
    DATA_FAILURE: (state) => ({ ...state, loading: false, allTickets: [], allUser: [] }),
});

export const SelectDataReducer = createReducer({ loading: false, selectedData: [], user: null, message: '' }, {
    SELECT_DATA_REQUEST: (state) => ({ ...state, loading: true, selectedData: [] }),
    SELECT_DATA_SUCCESS: (state, { payload }) => ({
        ...state,
        loading: false,
        selectedData: payload.selectedData,
        user: payload.user,
    }),
    SELECT_DATA_FAILURE: (state, { payload }) => ({
        ...state,
        loading: false,
        selectedData: [],
        message: payload.message,
    }),
});
