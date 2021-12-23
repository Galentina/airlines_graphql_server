const { gql } = require('apollo-server')

const typeDefs = gql`
    type Flight {
        id: ID!
        date: String!
        time: String!
        name: String!
        direct: String!
    }

    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        chosenFlights: [Flight]
    }

    type Query {
        users: [User!]!
        flights: [Flight]!
        flight: Flight!
        user(id: ID!): User!
        flightsByName(name: String!): [Flight]!
        flightsByDate(date: String!): [Flight]!
        flightsByDir(direct: String!): [Flight]!
        flightsByInt: [Flight]!
    }
    
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = CANADA
    }
    
    input UpdateUsernameInput {
        id: ID!
        newUsername: String!
    }
   
    
    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUsername(input: UpdateUsernameInput): User
        deleteUser(id: ID!): User
    }
    
    enum Nationality {
        CANADA
        GERMANY
        NETHERLANDS
        RUSSIA
    }
 
`
module.exports = { typeDefs };
