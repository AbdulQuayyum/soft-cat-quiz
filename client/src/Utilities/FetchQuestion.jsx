import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import * as Action from "../Redux/QuestionReducer"
import Dummy from "../Data/Dummy"

export const UseFetchQuestion = () => {
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({ IsLoading: false, APIData: [], ServerError: null })

    useEffect(() => {
        setGetData(prev => ({ ...prev, IsLoading: true }));

        (async () => {
            try {
                const Questions = Dummy
                // const [{ Questions, Answers }] = await (Dummy, (Data) => Data)

                if (Questions.length > 0) {
                    setGetData(prev => ({ ...prev, IsLoading: false }));
                    setGetData(prev => ({ ...prev, APIData: Questions }));

                    /** dispatch an action */
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

export const MoveNextQuestion = () => async (dispatch) => { }

export const MovePrevQuestion = () => async (dispatch) => { }