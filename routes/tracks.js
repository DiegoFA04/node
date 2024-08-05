const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = ['Hello', 'World'];
    res.send({ data: data });
})

module.exports = router;