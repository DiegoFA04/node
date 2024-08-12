const { handleHttpError } = require('../utils/handleError');

/**
 * Array con los roles permitidos
 * @param {*} role 
 * @returns 
 */
const checkRole = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        console.log({ user });
        const rolesByUser = user.role;//TODO: ['user']

        //TODO: ['admin', 'manager']
        const checkValueRole = roles.some((roleSingle) => rolesByUser.includes(roleSingle));// True or False

        if (!checkValueRole) {
            handleHttpError(res, 'USER_NOT_PERMISSIONS', 403);
            return;
        }

        next();
    } catch (error) {
        handleHttpError(res, 'ERROR_PERMISSIONS', 403);
    }
};

module.exports = checkRole;