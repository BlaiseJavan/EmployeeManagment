import Joi from '@hapi/joi';

const employeeValidation = Joi.object().keys({
  firstname: Joi.string().min(3).trim(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
});

const signinValidation = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const id = Joi.object().keys({
  id: Joi.number().required(),
});

export default {
  employeeValidation,
  signinValidation,
  id
};
