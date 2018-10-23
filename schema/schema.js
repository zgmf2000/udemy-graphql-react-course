const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  }
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLString
    },
    firstName: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    company: {
      type: CompanyType,
      resolve: async (parentValue) => {
        const { companyId: id } = parentValue;
        const { data } = await axios.get(`http://localhost:3000/companies/${id}`);
        return data;
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: async (parentValue, args) => {
        const { id } = args;
        const { data } = await axios.get(`http://localhost:3000/users/${id}`);
        return data;
      }
    },
    company: {
      type: CompanyType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: async (parentValue, args) => {
        const { id } = args;
        const { data } = await axios.get(`http://localhost:3000/companies/${id}`);
        return data;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
