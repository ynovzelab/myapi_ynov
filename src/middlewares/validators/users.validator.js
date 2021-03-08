const Joi = require('joi');

const userSchemaValidation = (req, res, next) => {

    const userValidationSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().regex(RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$')).required()
    });
    
    const validation = userValidationSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).send({
            error: validation.error
        })
    }

    next();

}


module.exports = userSchemaValidation;