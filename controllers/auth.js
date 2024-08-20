const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const { handleHttpError } = require('../utils/handleError');
const { usersModel } = require('../models');

/**
 * Este controlador recibe los datos del usuario y los guarda en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, { strict: false });
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser,
        };
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error al registrar el usuario');//403
    }
};

/**
 * Este controlador recibe los datos del usuario y verifica si el usuario existe en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req);
        //const user = await usersModel.findOne({ email: req.email }).select('password name email role');
        const user = await usersModel.findOne({ email: req.email });
        if (!user) {
            handleHttpError(res, 'USER_NOT_EXISTS', 404);
            return;
        }

        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword);
        if (!check) {
            handleHttpError(res, 'PASSWORD_INVALID', 401);
            return;
        }

        user.set('password', undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            user
        };
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error login user');//403
    }
}

module.exports = { registerCtrl, loginCtrl };