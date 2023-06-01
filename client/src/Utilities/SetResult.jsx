import * as Action from "../Redux/ResultReducer"

export const PushAnswer = (Result) => async (dispatch) => {
    try {
        await dispatch(Action.PushResultAction(Result))
    } catch (error) { console.error(error) }
}

export const UpdateResult = (Index) => async (dispatch) => {
    try {
        dispatch(Action.UpdateResultAction(Index))
    } catch (error) { console.error(error) }
}

export const UsePublishResult = (ResultData) => { }