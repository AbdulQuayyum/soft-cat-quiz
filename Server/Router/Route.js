import { Router } from "express"
const router = Router()

import * as Controller from "../Controllers/Controller.js"

/** Questions Routes API */

router.route('/Questions')
    .get(Controller.GetQuestions) /** GET Request */
    .post(Controller.InsertQuestions) /** POST Request */
    .delete(Controller.DropQuestions) /** DELETE Request */

router.route('/Result')
    .get(Controller.GetResult)
    .post(Controller.StoreResult)
    .delete(Controller.DropResult)

export default router