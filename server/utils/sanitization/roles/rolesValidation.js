const { body } = require('express-validator')

exports.insertRoleValidate = [
    body('role_type').not().isEmpty().withMessage('Enter role name')
]