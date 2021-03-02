const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    let token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).send({
            auth: false,
            token: null,
            message:"missing token, please login"
        })
    }
    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                auth: false,
                token: null,
                message:"no authorized"
            })
        }
        console.log(decoded);
        next();
    })
}

module.exports = verifyToken;