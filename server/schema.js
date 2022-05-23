const {buildSchema} = require('graphql');

const schema = buildSchema(`
    
    type User {
        id: ID
        username: String
        user_surname: String
        user_middlename: String
        user_passport_id: String
        user_login: String
        user_password: String
        user_district: String
        user_income: Float
        user_expenses: Float
        age: Int
    }

    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
    }

`)

module.exports = schema