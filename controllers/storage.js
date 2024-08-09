const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const PUBLIC_URL = process.env.PUBLIC_URL;

/**
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({ data: data });
    } catch (error) {
        handleHttpError(res, 'Error_list_item');//403
    }
};

/**
 * Obtener un item de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await storageModel.findById(id);
        res.send({ data: data });
    } catch (error) {
        handleHttpError(res, 'Error_detail_item');//403
    }
};

/**
 * Crear un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { file } = req;
    // console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    };
    const data = await storageModel.create(fileData);
    res.send({ data });
};

/**
 * Actualizar un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => { };

/**
 * Eliminar un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => { };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };