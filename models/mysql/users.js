const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const User = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        //allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        //allowNull: false
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM(['user', 'admin']),
        //defaultValue: 'user'
    },
}, {
    timestamps: true,
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
});

module.exports = User;