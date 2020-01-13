import helper from '../helpers/helper';
import Employee from '../models/employee';

const dropTable = async () => {
  await Employee.DropTableEmployee();
};
dropTable();

export default dropTable;
