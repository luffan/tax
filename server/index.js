const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const users = [{
  id: 1, username: "Smekers", age: 20, user_surname: "sss", user_middlename: 'ffff',
  user_pasport_id: 'sf234234', user_login: 'FDFS', user_password: 'fffffd', user_district: 'sdfsf',
  user_income: 43.23, user_expenses: 432.23,
}]

const app = express()
app.use(cors())

const root = {
  getAllUsers: () => {
    return users
  },
  getUser: ({ id }) => {
    return users.find(user => user.id == id)
  },
}


app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: root
}))

app.listen(3002, () => console.log('server started on port 3002'))