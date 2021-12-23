const { UserList } = require('../data/userData');
const { FlightList } = require('../data/flightData');
const _ = require('lodash');

const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },

        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, { id: Number(id) });
            return user;
        },

        flights: () => {
            return FlightList;
        },

        flightsByName: (parent, args) => {
            const name = args.name;
            const flightsByName = _.filter(FlightList, { name })
            return flightsByName;
        },

        flightsByDate: (parent, args) => {
            const date = args.date;
            const flightsByDate = _.filter(FlightList, { date })
            return flightsByDate;
        },

        flightsByDir: (parent, args) => {
            const direct = args.direct;
            const flightsByDir = _.filter(FlightList, { direct })
            return flightsByDir;
        },

        flightsByInt: () => {
            return _.filter(FlightList, (flight) =>
                Number(flight.date.split('-').join(''))>= 20221104 && Number(flight.date.split('-').join(''))<= 20221104)
        }
    },

    User: {
        chosenFlights: () => {
            return _.filter(FlightList, (flight) =>
                Number(flight.date.split('-').join(''))>= 20220104 && Number(flight.date.split('-').join(''))<= 20220115)
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length-1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id === Number(id)) { user.username = newUsername;
                userUpdated = user;
                }
            });
            return userUpdated;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id))
            return null;
        }
    }
};

module.exports = { resolvers };
