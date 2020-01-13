import Employee from '../models/employee';
import helper from '../helpers/helper';

class employeeController {
  // signup method
  static async signup(req, res) {
    const employee = new Employee(
      req.body.employeeName,
      req.body.nationalId,
      req.body.phoneNumber,
      req.body.email,
      req.body.dob,
      helper.hashPassword(req.body.password),
    );
 
    try {
      const newEmployee = await Employee.createEmployee(employee);
      const token = helper.generateToken(newEmployee.rows[0].id, newEmployee.rows[0].email);
      return res.status(201).json({
        status: 201,
        message: 'Manager sucessfuly added',
        userToken: token,
        data: {
          id: newEmployee.rows[0].id,
          employeeName: newEmployee.rows[0].employeeName,
          nationalId: newEmployee.rows[0].nationalId,
          phoneNumber: newEmployee.rows[0].phoneNumber,
          email: newEmployee.rows[0].email,
          dob: newEmployee.rows[0].dob,
        },
      });
      
    } catch (errors) {
      return res.status(400).json({
        status: 400,
        message: 'Error occurs',
      });
    }
  }

  // signin method
  static async signin(req, res) {
    try {
      const checkUser = await Employee.findBy('email', req.body.email);
      if (checkUser.rowCount !== 0) {
        const checkedPassword = helper.comparePassword(
          checkUser.rows[0].password, req.body.password,
        );
        if (!checkedPassword) {
          return res.status(401).json({
            status: 401,
            massage: 'Invalid credentials',
          });
        }
        const token = await helper.generateToken(checkUser.rows[0].id,
          req.body.email);
        return res.status(200).json({
          status: 200,
          massage: 'User is successfully logged in',
          token,
          data: {
          id: checkUser.rows[0].id,
          employeeName: checkUser.rows[0].employeeName,
          nationalId: checkUser.rows[0].nationalId,
          phoneNumber: checkUser.rows[0].phoneNumber,
          email: checkUser.rows[0].email,
          dob: checkUser.rows[0].dob,
          },
        });
      }
      return res.status(404).json({
        status: 404,
        massage: 'user with the email not found',
      });
    } catch (errors) {
      return res.status(400).json({
        status: 400,
        massage: errors,
      });
    }
  }

  // method to create an employee
  static async createEmployee(req, res) {
    try {
      const employee = new Employee(
      req.body.employeeName,
      req.body.nationalId,
      req.body.phoneNumber,
      req.body.email,
      req.body.dob,
      helper.hashPassword(req.body.password),
    );

      const newEmployee = await Employee.createEmployee(employee);
      return res.status(201).json({
        status: 201,
        data: newEmployee.rows[0],
      });
    } catch (error) {
      return res.status(401).json({
        status: 401,
        message: 'invalid auth',
      });
    }
  }

   // method to delete an employee
   static async deleteEmployee(req, res) {
    const column = 'id';
    const employeeId = req.params.id;
    const findEmployee = await Employee.findBy(column, employeeId);
    
    try {
      if (findEmployee) {
          await Employee.Delete(employeeId);
          return res.status(200).json({
            status: 200,
            message: 'the employee successful deleted',
          });
        }
      return res.status(404).json({
        status: 404,
        error: 'article not found',
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
  }
  
}

export default employeeController;
