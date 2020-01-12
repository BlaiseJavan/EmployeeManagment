import moment from 'moment';
import db from '../config/connection';


class Employee {
  constructor(employeeName, nationalId, phoneNumber, email, dob, password) {
    this.employeeName = employeeName;
    this.nationalId = nationalId;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.dob = dob;
    this.status = 'active';
    this.position = 'manager';
    this.password = password;
    this.createdon = moment().format('YYYY-MM-DD');
  }

  static async createEmployeeTable() {
    const result = await db.query(`
          CREATE TABLE IF NOT EXISTS employee (
              id SERIAL PRIMARY KEY,
              employeeName text,
              nationalId text UNIQUE,
              phoneNumber text UNIQUE,
              email text UNIQUE,
              dob text,
              status text,
              position text,
              password text,
              createdon date
          )`);
    return result;
  }

  static async createEmployee(data) {
    const result = await db.query(`INSERT INTO employee(employeeName, nationalId, phoneNumber, email, dob, status, position, password, createdon) VALUES(
        '${data.employeeName}',
        '${data.nationalId}',
        '${data.phoneNumber}',
        '${data.email}',
        '${data.dob}',
        '${data.status}',
        '${data.position}',
        '${data.password}',
        '${data.createdon}'
        ) returning *;
      `);

    return result;
  }

  static async CleanEmployee() {
    const result = await db.query('DELETE FROM employee;');
    return result;
  }

  static async selectCount(table, column, value) {
    const result = await db.query(`SELECT COUNT(1) FROM ${table} WHERE ${column} = '${value}';`);
    return result;
  }

  static async findBy(colomn, value) {
    const result = await db.query(`SELECT * FROM employee WHERE ${colomn}='${value}';`);
    return result;
  }

}
export default Employee;
