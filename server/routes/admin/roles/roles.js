const express = require('express')
const { createRole, fetchRoles } = require('../../../controller/admin/roles/rolesController')
const { insertRoleValidate } = require('../../../utils/sanitization/roles/rolesValidation')
const router = express.Router()

router.get('/fetchRole', fetchRoles)
router.post('/create_role', insertRoleValidate, createRole)

module.exports = router