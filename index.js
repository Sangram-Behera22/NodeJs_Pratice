const app = require('./app');
const connection = require('./config/database');
require('dotenv').config();
connection();
app.listen(process.env.PORT,()=>{
    console.log(`SERVER HAS CONNECTED ON PORT ${process.env.PORT}`);
});