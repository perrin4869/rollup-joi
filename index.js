import Joi from "joi";

const schema = Joi.object({
  name: Joi.string()
});

console.log(schema.validate({
  name: 1
}))
