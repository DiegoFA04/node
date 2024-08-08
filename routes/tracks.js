const express = require('express');
const router = express.Router();
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

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
router.post('/', validatorCreateItem, createItem);

/**
 * Actualizar un item en la base de datos
 */
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar un item en la base de datos
 */
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;