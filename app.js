require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnectNoSql = require('./config/mongo');
const { dbConnectMySQL } = require('./config/mysql');
const ENGINE_DB = process.env.ENGINE_DB;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 3000;

/**
 * Routes
 */

app.use('/api', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

ENGINE_DB === 'nosql' ? dbConnectNoSql() : dbConnectMySQL();
