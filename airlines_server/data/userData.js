const UserList = [
    {
        id: 1,
        name: "John",
        password: 'john20',
        username: "john",
        email: 'john@john.com',
        age: 20,
        nationality: "CANADIAN",
        friends: [
            {
                id: 3,
                name: "Julia",
                username: "julia",
                email: 'julia@julia.com',
                age: 40,
                nationality: "GERMAN"
            },
            {
                id: 4,
                name: "Mary",
                username: "mary",
                email: 'mary@mary.com',
                age: 50,
                nationality: "RUSSIAN"
            }
        ],
        flights: [
            { id: 420, date: "2022-10-26", time: "15:45", name: "Aeroflot", direct: "Moscow"},
        ]
    },
    {
        id: 2,
        name: "Mike",
        password: 'mike30',
        username: "mike",
        email: 'mike@mike.com',
        age: 30,
        nationality: "NETHERLANDS"
    },
    {
        id: 3,
        name: "Julia",
        password: 'julia40',
        username: "julia",
        email: 'julia@julia.com',
        age: 40,
        nationality: "GERMAN",
        friends: [
            {
                id: 2,
                name: "Mike",
                username: "mike",
                email: 'mike@mike.com',
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
        password: 'mary50',
        username: "mary",
        email: 'mary@mary.com',
        age: 50,
        nationality: "RUSSIAN"
    }
]

module.exports = { UserList };
