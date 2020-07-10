const mysql = require('../../utils/db/database')
const { validationResult } = require('express-validator')

exports.registerUser = async (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        let err = new Error()
        err.errors = errors
        err.status = 400
        return next(err)
    }

    let { user_role_id, name, email_id, password,
        mobile_no, work_exp_years, work_exp_month,
        resume, current_location } = req.body

    try {
        let query = `INSERT INTO user_account_details 
        (user_role_id, name, email_id, password, 
            mobile_no, work_exp_years, work_exp_month, 
            resume, current_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
        let [insertRow] = await mysql.execute(query, [user_role_id, name, email_id, password,
            mobile_no, work_exp_years, work_exp_month,
            resume, current_location])
        if (!insertRow) {
            throw new Error('Insert error')
        }
        return res.status(200).json({ result: insertRow })

    } catch (err) {
        let error = new Error()
        error.errors = err
        next(error)
    }
}