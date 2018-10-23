const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true // only intended for development purposes!
}));

app.listen(4000, () => {
  console.log('Listening...');
});
