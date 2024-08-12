const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Debes pasar el objeto del usuario para firmar el token
 * @param {*} user 
 */
const tokenSign = async (user) => {
    const sign = jwt.sign({
        _id: user._id,
        role: user.role,
    }, JWT_SECRET, {
        expiresIn: '2h'
    });
    return sign;
};

/**
 * Debes pasar el token para verificarlo
 * @param {*} tokenJWT 
 * @returns 
 */
const veriftyToken = async (tokenJWT) => {
    try {
        return jwt.verify(tokenJWT, JWT_SECRET);
    } catch (error) {
        return null;

    }
};

module.exports = { tokenSign, veriftyToken };