const app = require('./services/express.service');
const mongoose = require('./services/mongoose.service');
mongoose.connectDb();
app.start();
