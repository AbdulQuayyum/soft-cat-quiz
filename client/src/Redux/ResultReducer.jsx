import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const ResultReducer = createSlice({
    name: 'Result',
    initialState: {
        UserID: null,
        Result: []
    },
    reducers: {
        SetUserID: (state, action) => {
            state.UserID = action.payload
        },
        PushResultAction: (state, action) => {
            state.Result.push(action.payload)
        },
        UpdateResultAction: (state, action) => {
            const { trace, Checked } = action.payload;
            state.Result.fill(Checked, trace, trace + 1)
        },
        ResetResultAction: () => {
            return {
                UserID: null,
                Result: []
            }
        }
    }
})

export const { SetUserID, PushResultAction, ResetResultAction, UpdateResultAction } = ResultReducer.actions;

export default ResultReducer.reducer;