import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const ResultReducer = createSlice({
    name: 'Result',
    initialState: {
        UserID: null,
        Result: []
    },
})
