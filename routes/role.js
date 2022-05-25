const express = require('express');
const router = express.Router();

/* GET role listing. */
const { Role } = require('../models');
// console.info(Role);
function validate(value) {
    var format = `^[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]$/`;
    const isSpecialCharPresent = format.split('').some(char =>
        value.includes(char))
    return isSpecialCharPresent;
}

router.post('/', async(req, res) => {
    const P_SEARCH = req.body.P_SEARCH;
    console.info(req.body.P_SEARCH);

    if (P_SEARCH !== '' && !validate(P_SEARCH)) {
        const role = await Role.findAll({
            attributes: ['ID', 'NAME', 'LABEL', 'PARENT_ID'],
            where: {
                id: P_SEARCH
            }
        });
        return res.json({
            OUT_STAT: 'T',
            OUT_MESS: 'Success',
            OUT_DATA: role
        });

    } else if (P_SEARCH == '') {
        const role = await Role.findAll({
            attributes: ['ID', 'NAME', 'LABEL', 'PARENT_ID'],
        });

        return res.json({
            OUT_STAT: 'T',
            OUT_MESS: 'Success',
            OUT_DATA: role
        });
    } else if (validate(P_SEARCH)) {
        return res.status(400).json({
            OUT_STAT: 'F',
            OUT_MESS: 'Invalid input',
            OUT_DATA: ''
        });
    }
});





module.exports = router;