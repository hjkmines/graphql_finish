const actors = [
    { id: 1, name: "Robin Williams" },
    { id: 2, name: "Pedro Pascal" },
    { id: 3, name: "Jennifer Lawrence" }
]; 

const movies = [
    { id: 1, name: 'iRobot', actorId: 1 },
    { id: 2, name: 'GoodWill Hunting', actorId: 1 },
    { id: 3, name: 'The Pursuit of Happyness', actorId: 2 },
    { id: 4, name: 'Home Alone', actorId: 3 },
    { id: 5, name: 'Happy Gilmore', actorId: 1 },
    { id: 6, name: 'Batman', actorId: 2 },
    { id: 7, name: 'Parasite', actorId: 3 }
]

module.exports = {
    actors, 
    movies
}