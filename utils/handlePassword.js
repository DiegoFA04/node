const bcryptjs = require('bcryptjs');

/**
 * Contraseña sin encriptar: password
 * @param {} simplePassword 
 */
const encrypt = async (simplePassword) => {
    const hash = await bcryptjs.hash(simplePassword, 10);
    return hash;
};

/**
 * Se compara la contraseña sin encriptar con la contraseña encriptada
 * @param {} simplePassword 
 * @param {*} hashPassword 
 */
const compare = async (simplePassword, hashPassword) => {
    return await bcryptjs.compare(simplePassword, hashPassword);
};

module.exports = { encrypt, compare };