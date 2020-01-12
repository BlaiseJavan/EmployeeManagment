/* eslint-disable consistent-return */
import validation from '../helpers/validation';

class Validator {
  static employee(req, res, next) {
    const employeeValidated = validation.employeeValidation.validate({
      employeeName: req.body.employeeName,
      nationalId: req.body.nationalId,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      dob: req.body.dob,
      password: req.body.password,
    });

    if (!employeeValidated.error) {
      req.user = employeeValidated;
      next();
    } else {
      const errorMessage = employeeValidated.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(400).json({
        status: 400,
        message: errorMessage,
      });
    }
  }

  static signin(req, res, next) {
    const signinValidated = validation.signinValidation.validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (!signinValidated.error) {
      req.user = signinValidated;
      next();
    } else {
      const errorMessage = signinValidated.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(400).json({
        status: 400,
        message: errorMessage,
      });
    }
  }

  static id(req, res, next) {
    const idValidated = validation.id.validate({
      id: req.body.id,
    });
    if (!idValidated.error) {
      req.user = idValidated;
      next();
    } else {
      const errorMessage = idValidated.error.details[0].message.replace('"', ' ').replace('"', '');
      return res.status(400).json({
        status: 400,
        message: errorMessage,
      });
    }
  }
}
export default Validator;
