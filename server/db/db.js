import helper from '../helpers/helper';
import Employee from '../models/employee';

const createTables = async () => {
  const password = helper.hashPassword('manager');

  await Employee.createEmployeeTable();
  await Employee.CleanEmployee();

  const employee = new Employee(
    'Manager one',
    '1199580103040002',
    '0788211579',
    'blaiseirakoze50@gmail.com',
    '2020-02-20',
     password,
  );

  await Employee.createEmployee(employee);
};
createTables();

export default createTables;
