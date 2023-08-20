const mongoose = require('mongoose');
const connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DATABASE HAS CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.log("FAILED TO CONNECT WITH DATABSE");
    }
}
module.exports = connection;