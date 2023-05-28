import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const QuestionReducer = createSlice({
    name: 'Questions',
    initialState: {
        queue: [],
        answers: [],
        trace: 0
    },
    reducers: {
        StartExamAction: (state, action) => {
            let { Question, answers } = action.payload
            return {
                ...state,
                queue: Question,
                answers
            }
        },
        MoveNextAction: (state) => {
            return {
                ...state,
                trace: state.trace + 1
            }
        },
        MovePrevAction: (state) => {
            return {
                ...state,
                trace: state.trace - 1
            }
        },
        ResetAllAction: () => {
            return {
                queue: [],
                answers: [],
                trace: 0
            }
        }
    }
})

export const { StartExamAction, MoveNextAction, MovePrevAction, ResetAllAction } = QuestionReducer.actions;

export default QuestionReducer.reducer;
