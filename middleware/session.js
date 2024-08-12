const { handleHttpError } = require('../utils/handleError');
const { veriftyToken } = require('../utils/handleJwt');
const { usersModel } = require('../models');

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, 'NEED_SESSION', 401);
            return;
        }

        const token = req.headers.authorization.split(' ')[1];
        const dataToken = await veriftyToken(token);

        if (!dataToken._id) {
            handleHttpError(res, 'ERROR_ID_TOKEN', 401);
            return;
        }

        const user = await usersModel.findById(dataToken._id);
        req.user = user;

        next();
    } catch (error) {
        handleHttpError(res, 'NOT_SESSION', 401);
    }
};

module.exports = authMiddleware;