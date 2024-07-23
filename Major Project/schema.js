const Joi = require("joi")
module.exports.listingschema = Joi.object({
    Listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.number().required().min(0),
        image : Joi.any().allow("",null),
    }).required(),
});