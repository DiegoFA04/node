const express = require('express');
const router = express.Router();
const customHeader = require('../middleware/customHeader');
const checkRole = require('../middleware/role');
const authMiddleware = require('../middleware/session');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

/**
 * Obtener lista de base de datos
 */
router.get('/', authMiddleware, getItems);

/**
 * Obtener un item de la base de datos
 */
router.get('/:id', authMiddleware, validatorGetItem, getItem);

/**
 * Crear un item en la base de datos
 */
router.post('/', authMiddleware, checkRole(['admin']), validatorCreateItem, createItem);

/**
 * Actualizar un item en la base de datos
 */
router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar un item en la base de datos
 */
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);

module.exports = router;