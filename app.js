const app = require('./src/services/express.service');
const mongoose = require('./src/services/mongoose.service');
mongoose.connectDb();
app.start();