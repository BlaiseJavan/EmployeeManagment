import Joi from '@hapi/joi';

const employeeValidation = Joi.object().keys({
  employeeName: Joi.string().min(3).trim().required(),
  nationalId: Joi.string().min(16).max(16).trim(),
  phoneNumber: Joi.string().required(),
  email: Joi.string().email().required(),
  dob: Joi.string().required(),
  password: Joi.string().required(),
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
