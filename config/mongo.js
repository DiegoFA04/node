const mongoose = require('mongoose');

/* const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, res) => {
            if (!err) {
                console.log('Connected to database');
            }
            else {
                console.log('Error connecting to database');
            }
        }
    );
} */
const DB_URI = process.env.DB_URI;

const dbConnect = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(DB_URI)
        console.log('Mongo connected')
    }
    catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = dbConnect;