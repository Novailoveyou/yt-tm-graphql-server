import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'

const port = 4000

const root = {
  hello: () => {
    return 'Hello world!'
  }
}

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
