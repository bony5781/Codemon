const Joi = require('joi');

module.exports.productSchema = Joi.object({
    "name": Joi.string()
        .max(20)
        .required(),

    "description": Joi.string()
        .max(20)
        .required(),

    "price": Joi.number()
        .integer()
        .required()
})