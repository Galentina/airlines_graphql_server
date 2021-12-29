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
        password: String!
        username: String!
        age: Int!
        nationality: Nationality!
        email: String!
        friends: [User]
        chosenFlights: [Flight]
    }

    type Query {
        users: UsersResult
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
        password: String!
        username: String!
        age: Int!
        nationality: Nationality = CANADIAN
        email: String!
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
    
    type UsersSuccessfulResult {
        users: [User!]!
    }
    type UsersErrorResult {
        message: String!
    }
    
    union UsersResult = UsersSuccessfulResult | UsersErrorResult
    
    enum Nationality {
        AFGHAN
        ALBANIAN
        ALGERIAN
        ARGENTINE
        AUSTRALIAN
        AUSTRIAN
        BANGLADESHI
        BELGIAN
        BOLIVIAN
        BATSWANA
        BRAZILIAN
        BULGARIAN
        CAMBODIAN
        CAMEROONIAN
        CANADIAN
        CHILEAN
        CHINESE
        COLOMBIAN
        COSTA_RICAN
        CROATIAN
        CUBAN
        CZECH
        DANISH
        DOMINICAN
        ECUADORIAN
        EGYPTIAN
        SALVADORIAN
        ENGLISH
        ESTONIAN
        ETHIOPIAN
        FIJIAN
        FINNISH
        FRENCH
        GERMAN
        GHANAIAN
        GREEK
        GUATEMALAN
        HAITIAN
        HONDURAN
        HUNGARIAN
        ICELANDIC
        INDIAN
        INDONESIAN
        IRANIAN
        IRAQI
        IRISH
        ISRAELI
        ITALIAN
        JAMAICAN
        JAPANESE
        JORDANIAN
        KENYAN
        KUWAITI
        LAO
        LATVIAN
        LEBANESE
        LIBYAN
        LITHUANIAN
        MALAGASY
        MALAYSIAN
        MALIAN
        MALTESE
        MEXICAN
        MONGOLIAN
        MOROCCAN
        MOZAMBICAN
        NAMIBIAN
        NEPALESE
        NETHERLANDS
        NEW_ZEALAND
        NICARAGUAN
        NIGERIAN
        NORWEGIAN
        PAKISTANI
        PANAMANIAN
        PARAGUAYAN
        PERUVIAN
        PHILIPPINE
        POLISH
        PORTUGUESE
        ROMANIAN
        RUSSIAN
        SAUDI
        SCOTTISH
        SENEGALESE
        SERBIAN
        SINGAPOREAN
        SLOVAK
        SOUTH_AFRICAN
        KOREAN
        SPANISH
        SRI_LANKAN
        SUDANESE
        SWEDISH
        SWISS
        SYRIAN
        TAIWANESE
        TAJIKISTANI
        THAI
        TONGAN
        TUNISIAN
        TURKISH
        UKRAINIAN
        EMIRATI
        BRITISH
        AMERICAN
        URUGUAYAN
        VENEZUELAN
        VIETNAMESE
        WELSH
        ZAMBIAN
        ZIMBABWEAN
    }
 
`
module.exports = { typeDefs };
