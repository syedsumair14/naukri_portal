const mysql = require('../../../utils/db/database')
const { validationResult } = require('express-validator')

exports.createRole = async (req, res, next) => {
    console.log('ennted')
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        errors.status = 400
        next(errors)
        return
    }

    let insertRole = 'INSERT INTO user_roles (user_type) VALUES (?)'
    let findOneRole = 'SELECT * FROM user_roles WHERE id = ?'

    try {
        let insertedRow = await mysql.execute(insertRole, [req.body.role_type])
        let insertedRecord = insertedRow[0]

        let [insertedRowDetail] = await mysql.execute(findOneRole, [insertedRecord.insertId])
        return res.json(insertedRowDetail[0])
    } catch (error) {
        let err = new Error()
        err.errors = error
        next(err)
    }
}

exports.fetchRoles = async (req, res, next) => {
    let { limit, offset } = req.query

    try {
        let query = `SELECT * FROM user_roles ORDER BY id ASC LIMIT ? OFFSET ?`
        let [roleList] = await mysql.execute(query, [limit, offset])
        if (!roleList) {
            let err = new Error()
            return err.status = 503
        }
        return res.status(200).json(roleList)
    } catch (error) {
        let err = new Error()
        err.errors = error
        next(err)
    }
}