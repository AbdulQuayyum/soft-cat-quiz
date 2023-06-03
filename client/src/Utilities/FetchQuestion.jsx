import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import * as Action from "../Redux/QuestionReducer"
import { GetServerData } from "./Helper"
// import Dummy, { Answers } from "../Data/Dummy"

export const UseFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ IsLoading: false, APIData: [], ServerError: null })

    useEffect(() => {
        setGetData(prev => ({ ...prev, IsLoading: true }));

        (async () => {
            try {
                const [{ Questions, Answers }] = await GetServerData(`${import.meta.env.VITE_SERVER_URL}/v1/Questions`, (data) => data)
                // const Questions = await Dummy
                // console.log(Questions)
                // const [{ Questions, Answers }] = await (Dummy, (Data) => Data)

                if (Questions.length > 0) {
                    setGetData(prev => ({ ...prev, IsLoading: false }));
                    setGetData(prev => ({ ...prev, APIData: Questions }));

                    /** dispatch an action */
                    // dispatch(Action.StartExamAction(Questions))
                    dispatch(Action.StartExamAction({ Question: Questions, Answers }))

                } else {
                    throw new Error("No Question Avalibale");
                }

            } catch (error) {
                setGetData(prev => ({ ...prev, IsLoading: false }));
                setGetData(prev => ({ ...prev, ServerError: error }));
            }
        })()

    }, [dispatch])

    return [getData, setGetData]

}

export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.MoveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.MovePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}