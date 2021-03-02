require('dotenv').config();
const express = require('express');
const app = express();
const apiRouter = require('../routes');
const bodyParser = require('body-parser');

exports.start = () => {
    
    const port = process.env.PORT;
    app.use(bodyParser.json());
    app.use('/api/v1', apiRouter);

    app.listen(port, (err) => {
        if (err) {
            console.log(`Error : ${err}`);
            process.exit();
        }
        console.log(`app is running on port ${port}`);
    })
}