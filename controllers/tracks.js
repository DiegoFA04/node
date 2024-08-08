const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

/**
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'Error_get_items');//403
    }
};

/**
 * Obtener un item de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error_get_item');//403
    }
};

/**
 * Crear un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        // const body = req.body;
        // const bodyClean = matchedData(req);

        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'Error_create_items');//403
    }
};

/**
 * Actualizar un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        // console.log('ID:', id); // Log para verificar el ID
        // console.log('Body:', body); // Log para verificar el cuerpo de la solicitud
        const data = await tracksModel.findOneAndUpdate(
            { _id: id }, // Asegúrate de que el filtro sea correcto
            body,
            { new: true } // Para devolver el documento actualizado
        );

        if (!data) {
            return handleHttpError(res, 'Item not found', 404); // Manejar caso de item no encontrado
        }

        res.send({ data });
    } catch (e) {
        console.error('Error:', e); // Log para verificar el error
        handleHttpError(res, 'Error_update_items');//403
    }
};

/**
 * Eliminar un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await tracksModel.delete({ _id: id });
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error_delete_item');//403
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };