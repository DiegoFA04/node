const { tracksModel } = require('../models');

/**
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({ data: data });
};

/**
 * Obtener un item de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => { };

/**
 * Crear un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req;
    console.log(body);

    const data = await tracksModel.create(body);
    res.send({ data });
};

/**
 * Actualizar un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => { };

/**
 * Eliminar un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => { };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };