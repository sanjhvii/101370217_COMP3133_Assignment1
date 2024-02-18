
const { gql } = require('apollo-server')


module.exports = gql`

type User{
    id:ID!
    username: String!
    email: String!
    password: String!
    
}

type Employee{
    id: ID!
    first_name: String
    last_name: String
    email: String
    salary: Float
    gender: String
}

input userInput{
    username: String!
    password: String!
    email: String!
}

input UserInput{
    username: String!
    password: String!
    email: String!
}
input LoginInput{
    username: String!
    password: String!
}

input empInput{
    first_name: String
    last_name: String
}

input employeeInput{
    first_name: String
    last_name: String
    email: String
    salary: Float
}

input EmployeeInput{
    first_name: String
    last_name: String
    email: String
    salary: Float
    gender: String
},

input updateEmployeeInput{
    first_name: String
    last_name: String
    email: String
},

type Query{
    employeeID(ID: ID!): Employee!
    getEmployees: [Employee]!
    login(loginInput: LoginInput): User!
    getUsers: [User]!
},

type Mutation{
    createUser(userInput: UserInput): User!
    createEmployee(employeeInput: EmployeeInput): Employee!
    updateEmployee(ID: ID!, employeeInput: updateEmployeeInput): Employee!
    deleteEmployee(ID: ID!): Boolean!

}`