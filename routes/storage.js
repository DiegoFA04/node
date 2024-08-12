const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { getItems, getItem, createItem, deleteItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');

//TODO: http://localhost:3000/api/storage

/**
 * Obtener lista de base de datos
 */
router.get('/', getItems);

/**
 * Obtener un item de la base de datos
 */
router.get('/:id', validatorGetItem, getItem);

/**
 * Crear un item en la base de datos
 */
router.post('/', uploadMiddleware.single('myfile'), createItem);

/**
 * Eliminar un item en la base de datos
 */
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;