import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function AttemptsNumber(Result) {
    return Result.filter(Result => Result !== undefined).length
}

export function EarnPointsNumber(Result, Answers, Point) {
    return Result.map((element, index) => Answers[index] === element).filter(index => index).map(index => Point).reduce((prev, curr) => prev + curr, 0)
}

export function FlagResult(TotalPoints, EarnPoints) {
    return (TotalPoints * 50 / 100) < EarnPoints /** earn 50% marks */
}

export function CheckIfUserExist({ children }) {
    const auth = useSelector(state => state.Result.UserID)
    return auth ? children : <Navigate to={'/'} replace={true} />
}

export async function GetServerData(url, callback) {
    const data = await (await axios.get(url))?.data
    return callback ? callback(data) : data
}

export async function PostServerData(url, Result, callback) {
    const data = await (await axios.post(url, Result))?.data
    return callback ? callback(data) : data
}