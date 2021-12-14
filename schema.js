import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'

// Hardcoded data
const customers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    age: 35
  },
  {
    id: '2',
    name: 'Steve Smith',
    email: 'steeve@gmail.com',
    age: 25
  },
  {
    id: '3',
    name: 'Sara Williams',
    email: 'sara@gmail.com',
    age: 32
  }
]

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return customers.find(customer => customer.id === args.id)
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        return customers
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
})

export default schema
