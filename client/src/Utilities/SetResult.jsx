import * as Action from "../Redux/ResultReducer"

export const PushAnswer = (Result) => async (dispatch) => {
    try {
        await dispatch(Action.PushResultAction(Result))
    } catch (error) { console.error(error) }
}

export const UpdateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.UpdateResultAction(index))
    } catch (error) { console.error(error) }
}

export const UsePublishResult = (ResultData) => {
    const { Result, UserName } = ResultData
        (async () => {
            try {
                if (Result !== [] && !UserName) throw new Error("Couldn't get Result");
                await postServerData(`${import.meta.env.VITE_SERVER_URL}/v1/Result`, ResultData, data => data)
            } catch (error) {
                console.log(error)
            }
        })();
}