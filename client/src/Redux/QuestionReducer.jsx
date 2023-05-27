import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const QuestionReducer = createSlice({
    name: 'Questions',
    initialState: {
        Queue: [],
        Answers: [],
        Trace: 0
    },
})
