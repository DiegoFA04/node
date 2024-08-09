const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');

// Se esta haciendo uso de multer para subir archivos, por lo que no se necesita validar los campos
/* const validatorCreateItem = [
    check('filename').exists().notEmpty(),
    check('album').exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]; */

const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = { validatorGetItem };