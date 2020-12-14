import Joi from "joi";
// const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string()
});

console.log(schema.validate({
  name: 1
}))
