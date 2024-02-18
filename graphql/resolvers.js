
const employee = require('../model/employee');
const user = require('../model/user');

// Define the resolvers

//sart of mutation
const resolvers = {
  Mutation: {
    //creating a user
    async createUser(_, { userInput: { username, password, email } }) {
      const newUser = await user.create({
        username,
        password,
        email
      });
      return { username: newUser.username, email: newUser.email };
    },

    //creating an employee
    async createEmployee(_, { employeeInput: { first_name, last_name, email, gender, salary } }) {
      const newEmployee = await employee.create({
        first_name,
        last_name,
        email,
        gender,
        salary
      });
      return { first_name: newEmployee.first_name, last_name: newEmployee.last_name };
    },
    //udpates employee using ID
    async updateEmployee(_, { ID, employeeInput: { first_name, last_name, email, salary } }) {
      const updatedEmployee = await employee.findByIdAndUpdate(ID, {
        first_name,
        last_name,
        email,
        salary
      }, { new: true });
      return { first_name: updatedEmployee.first_name, last_name: updatedEmployee.last_name };
    },
    //delete employee using ID
    async deleteEmployee(_, { ID }) {
      try {
        await employee.findByIdAndDelete(ID);
        return true;
      } catch (err) {
        return false;
      }
    }
  },

  Query: {
    //displaus all users
    async getUsers() {
      try {
        const users = await user.find();
        return users;
      } catch (err) {
        return {
          message: "Error fetching all user",
        };
      }
    },

    async getEmployees() {
      try {
        const emps = await employee.find();
        return emps;
      } catch (err) {
        return {
          message: "Error fetching all employees",
        };
      }
    },

    //allow user to login by using username and password
    async login(_, { loginInput: { username, password } }){
        const users = await user.findOne({ username, password });
        if (!users) {
            throw new Error('User already exists')
        }else{
            throw new Error('User not found');
        }
    },
    //displays all employees using ID
    async employeeID(_, { ID }) {
        return await employee.findById(ID);
      },
  }
};

// Export the resolvers
module.exports = resolvers;