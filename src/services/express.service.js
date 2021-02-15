const express = require('express');
const app = express();

exports.start = () => {
    
    const port = 3000;

    app.listen(port, (err) => {
        if (err) {
            console.log(`Error : ${err}`);
            process.exit();
        }
        console.log(`app is running on port ${port}`);
    })
}