const { handleHttpError } = require('../utils/handleError');
const { veriftyToken } = require('../utils/handleJwt');
const { usersModel } = require('../models');
const getProperties = require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, 'NEED_SESSION', 401);
            return;
        }

        const token = req.headers.authorization.split(' ')[1];
        const dataToken = await veriftyToken(token);

        if (!dataToken) {
            handleHttpError(res, 'NOT_PAYLOAD_DATA', 401);
            return;
        }

        const query = {
            [propertiesKey.id]: dataToken[propertiesKey.id]
        };

        const user = await usersModel.findOne({});
        req.user = user;

        next();
    } catch (error) {
        handleHttpError(res, 'NOT_SESSION', 401);
    }
};

module.exports = authMiddleware;