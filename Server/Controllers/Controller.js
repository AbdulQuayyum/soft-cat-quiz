import Question from "../Models/QuestionSchema.js"
import Results from "../Models/ResultSchema.js"
import Questions, { Answers } from "../Database/Data.js"

/** get all questions */
export async function GetQuestions(req, res) {
    try {
        const Q = await Question.find();
        // console.log(Q)
        res.json(Q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
// export async function InsertQuestions(req, res) {
//     try {
//         Question.insertMany({ Questions, Answers }
//             .then(function (err, data) {
//                 res.json({ msg: "Data Saved Successfully...!" })
//             }))
//     } catch (error) {
//         res.json({ error })
//     }
// }

export async function InsertQuestions(req, res) {
    try {
        Question.insertMany({ Questions, Answers }, function (err, data) {
            res.json({ msg: "Data Saved Successfully...!" })
        })
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Question */
export async function DropQuestions(req, res) {
    try {
        await Question.deleteMany();
        res.json({ msg: "Question Deleted Successfully...!" });
    } catch (error) {
        res.json({ error })
    }
}

/** get all result */
export async function GetResult(req, res) {
    try {
        const Results = await Results.find();
        res.json(Results)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function StoreResult(req, res) {
    try {
        const { UserName, Result, Attempts, Points, Achived } = req.body;
        if (!UserName && !Result) throw new Error('Data Not Provided...!');

        Results.create({ UserName, Result, Attempts, Points, Achived }, function (err, data) {
            res.json({ msg: "Result Saved Successfully...!" })
        })

    } catch (error) {
        res.json({ error })
    }
}

/** delete all result */
export async function DropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}