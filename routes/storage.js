const express = require('express');
const router = express.Router();
//TODO: http://localhost:3000/api/storage

router.post('/', (req, res) => {
    res.send({ a: 1 });
});

module.exports = router;