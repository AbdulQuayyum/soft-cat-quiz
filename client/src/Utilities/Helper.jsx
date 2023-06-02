import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from 'axios'

export function AttemptsNumber(Result) { }

export function EarnPointsNumber(Result, Answers, Points) { }

export function FlagResult(TotalPoints, EarnPoints) { }

export function CheckIfUserExist({ children }) { }

export async function GetServerData(url, Callback) { }

export async function PostServerData(url, Result, Callback) { }