import helper from '../helpers/helper';

const newEmployee = {
   email: 'blais@gmail.com',
   employeeName: 'blaise javan',
   nationalId: '1111111111111122',
   phoneNumber: '0788211577',
   dob: '2020-02-20',
   password: 'password'
};

const emp = {
  email: 'blaisee@gmail.com',
  employeeName: 'blaise javan',
  nationalId: '1111111111111123',
  phoneNumber: '0788211003',
  dob: '2020-02-20',
  password: 'password'
};

const wrongNewEmployee = {
   email: 'blais@gmail.com',
   employeeName: 'blaise javan',
   nationalId: '1111111111111122',
   dob: '2020-02-20',
   password: 'password'
};

const emailExist = {
   email: 'blais@gmail.com',
   employeeName: 'blaise javan',
   nationalId: '1111111111111133',
   phoneNumber: '0788211576',
   dob: '2020-02-20',
   password: 'password'
};

const employee = {
  email: 'blais@gmail.com',
  password: 'password',
};

const wrongEmployee = {
  email: 'blais@gmail.com',
  password: 'passw',
};

const requiredPass = {
  email: 'blaise@gmail.com',
};

const article = {
  title: 'Lorem ipsum dolor sit amet consectttg jbcsjshs',
  article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt sed voluptate nobis distinctio. Suscipit, ullam rerum? Omnis, molestiae hic perferendis illo laboriosam qui ducimus placeat consequatur similique aliquam sint.',
  tags: 'music',
};

const id = 3;

const token = helper.generateToken();

const updateEmployee = {
    email: 'blaise7@gmail.com',
    employeeName: 'blaise irakoze',
    nationalId: '1111111111114892',
    phoneNumber: '0788211582',
    dob: '2020-02-20',
    password: 'password',
    position: 'develop'
};

export {
  wrongNewEmployee,
  newEmployee,
  emp,
  emailExist,
  employee,
  wrongEmployee,
  requiredPass,
  article,
  id,
  token,
  updateEmployee
};
