const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 3,
                name: "Julia",
                username: "julia",
                age: 40,
                nationality: "GERMANY"
            },
            {
                id: 4,
                name: "Mary",
                username: "mary",
                age: 50,
                nationality: "RUSSIA"
            }
        ],
        flights: [
            { id: 420, date: "2022-10-26", time: "15:45", name: "Aeroflot", direct: "Moscow"},
        ]
    },
    {
        id: 2,
        name: "Mike",
        username: "mike",
        age: 30,
        nationality: "NETHERLANDS"
    },
    {
        id: 3,
        name: "Julia",
        username: "julia",
        age: 40,
        nationality: "GERMANY",
        friends: [
            {
                id: 2,
                name: "Mike",
                username: "mike",
                age: 30,
                nationality: "NETHERLANDS"
            }
        ],
        flights: [
            { id: 446, date: "2022-11-06", time: "10:30", name: "Alitalia", direct: "Madrid"},
        ]
    },
    {
        id: 4,
        name: "Mary",
        username: "mary",
        age: 50,
        nationality: "RUSSIA"
    }
]

module.exports = { UserList };
