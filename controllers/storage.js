const fs = require('fs');
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({ data });
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
        res.send({ data });
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
    try {
        const { file } = req;
        // console.log(file);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        };
        const data = await storageModel.create(fileData);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error_create_item');//403
    }
};

/**
 * Eliminar un item en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const dataFile = await storageModel.findById(id);
        // await storageModel.deleteOne({ _id: id }); // Eliminar de la base de datos
        await storageModel.delete({ _id: id }); // Soft delete de la base de datos
        const { filename } = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;

        // fs.unlinkSync(filePath); // Eliminar archivo del sistema
        const data = {
            filePath,
            deleted: 1
        };

        res.send({ data });
    } catch (error) {
        handleHttpError(res, 'Error_detail_item');//403
    }
};

module.exports = { getItems, getItem, createItem, deleteItem };