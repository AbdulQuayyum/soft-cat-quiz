import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const QuestionReducer = createSlice({
    name: 'Questions',
    initialState: {
        Queue: [],
        Answers: [],
        Trace: 0
    },
    reducers: {
        StartExamAction : (state, action) => {
            let { Question, Answers} = action.payload
            return {
                ...state,
                Queue : Question,
                Answers
            }
        },
        MoveNextAction : (state) => {
            return {
                ...state,
                trace : state.Trace + 1
            }
        },
        MovePrevAction : (state) => {
            return {
                ...state,
                Trace : state.Trace - 1
            }
        },
        ResetAllAction : () => {
            return {
                Queue: [],
                Answers : [],
                Trace : 0
            }
        }
    }
})

export const { StartExamAction, MoveNextAction, MovePrevAction, ResetAllAction } = QuestionReducer.actions;

export default QuestionReducer.reducer;
