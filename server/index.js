const merge = require('lodash.merge');
const { ApolloServer, gql } = require('apollo-server');

const schema = gql`
type Person {
  name: String!
  age: Int
  gender: Gender
  height(unit: HeightUnit = METER) : Float
}

enum Gender {
  MALE
  FEMALE
}

enum HeightUnit { 
  METER
  INCH
}

type Query {
  personWithName(name: String!): Person
  guys: [Person]
  girls: [Person]
}

schema {
  query: Query
}
`;

const rootResolvers = {
    Query: {
        personWithName(root, { name }, context) {
            return findBy('name', name).then(people => people ? people[0] : []);
        },

        guys(root, _, context) {
            return findBy('gender', 'MALE');
        },

        girls(root, _, context) {
            return findBy('gender', 'FEMALE');
        }
    }
};

// This `findBy` method simulates a database query, hence it returning a promise.
const findBy = (field, value) => Promise.resolve(people.filter(person => person[field] === value));

const people = [
    {
        name: 'George',
        age: 17,
        gender: 'MALE',
        height: 72
    }, {
        name: 'Jill',
        age: 19,
        gender: 'FEMALE',
        height: 65
    }, {
        name: 'Alexander',
        age: 32,
        gender: 'MALE',
        height: 68
    }
];

const personResolver = {
    Person: {
        name: ({ name }) => name.toUpperCase(),
        height: ({ height }, { unit }) => unit === 'METER' ? height * 0.0254 : height
    },
};

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: merge(rootResolvers, personResolver),
});

server.listen({ port: 9999 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});