const Joi = require('joi');

const userSchemaValidation = (req, res, next) => {

    const userValidationSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().required()
    });
    
    const validation = userValidationSchema.validate(req.body);

    if (validation.error) {
        return res.send({
            error: validation.error
        })
    }

    next();

}


module.exports = userSchemaValidation;