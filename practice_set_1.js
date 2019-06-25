// Using a database named movies
use movies

// Make a collection named movieList
db.createCollection("movieList")


///////////////////////////////////////// Inserting documents \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


db.movieList.insert({
    title : "Fight Club",
    writer : "Chuck Palahniuk",
    year : 1999,
    actors : [
        "Brad Pitt",
        "Edward Norton"
    ]
})

// View documents in the collection
db.movieList.find().pretty()


// Inserting more documents
db.movieList.insertMany([{
    title : "Pulp Fiction",
    writer : "Quentin Tarantino",
    year : 1994,
    actors : [
        "John Travolta",
        "Uma Thurman"
    ]
}, {
    title : "Inglorious Basterds",
    writer : "Quentin Tarantino",
    year : 2009,
    actors : [
        "Brad Pitt", 
        "Diane Kruger",
        "Eli Roth"
    ]
}, {
    title : "The Hobbit: An Unexpected Journey",
    writer : "J.R.R. Tolkein",
    year : 2012,
    franchise : "The Hobbit"
}, {
    title : "The Hobbit: The Desolation of Smaug",
    writer : "J.R.R. Tolkein",
    year : 2013,
    franchise : "The Hobbit"
}, {
    title : "The Hobbit: The Battle of the Five Armies",
    writer : "J.R.R. Tolkein",
    year : 2012,
    franchise : "The Hobbit",
    synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
}])

db.movieList.insertMany([{title : "Pee Wee Herman's Big Adventure"}, {title : "Avatar"}])


///////////////////////////////////////// Finding documents \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// get all documents
db.movieList.find().pretty()

// get all documents with writer set to "Quentin Tarantino"
db.movieList.find({writer: "Quentin Tarantino"}).pretty()

// get all documents where actors include "Brad Pitt"
db.movieList.find({actors: "Brad Pitt"}).pretty()

// get all documents with franchise set to "The Hobbit"
db.movieList.find({franchise: "The Hobbit"}).pretty()

// get all movies released in the 90s
db.movieList.find({$and: [{year: {$gt: 1899}}, {year: {$lt: 2000}}]}).pretty()

// get all movies released before the year 2000 or after 2010
db.movieList.find({$or: [{year: {$lt: 2000}}, {year: {$gt: 2010}}]}).pretty()


///////////////////////////////////////// Updating documents \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// add a synopsis to "The Hobbit: An Unexpected Journey"
db.movieList.update({title: "The Hobbit: An Unexpected Journey"},{$set:{synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})

db.movieList.find({title: "The Hobbit: An Unexpected Journey"}).pretty()


// add a synopsis to "The Hobbit: The Desolation of Smaug"
db.movieList.update({title: "The Hobbit: The Desolation of Smaug"},{$set:{synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})

db.movieList.find({title: "The Hobbit: The Desolation of Smaug"}).pretty()


// add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movieList.update({title : "Pulp Fiction"},{$push: {actors: "Samuel L. Jackson"}})

db.movieList.find({title: "Pulp Fiction"}).pretty()


///////////////////////////////////////// Text search \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// find all movies that have a synopsis that contains the word "Bilbo"
db.movieList.find({synopsis: /Bilbo/}).pretty()

// find all movies that have a synopsis that contains the word "Gandalf"
db.movieList.find({synopsis: /Gandalf/}).pretty()

// find all movies that have a synopsis that contains the phrase "Gandalf the Grey" exactly
db.movieList.find({synopsis: /"\"Gandalf the Grey\""/}).pretty()
// there should be no records

// find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movieList.createIndex({synopsis: "text"})
// To perform text search queries, we must have a text index on our collection.
// A collection can only have one text search index, but that index can cover multiple fields.

db.movieList.find({$text: {$search: "Bilbo -Gandalf"}}).pretty()

// find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
db.movieList.find({synopsis: /(dwarves)|(hobbit)/}).pretty()

// find all movies that have a synopsis that contains the word "gold" and "dragon"
db.movieList.find({synopsis: /(gold)|(dragon)/}).pretty()


///////////////////////////////////////// Delete documents \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// delete the movie "Pee Wee Herman's Big Adventure"
db.movieList.remove({title : "Pee Wee Herman's Big Adventure"})
db.movieList.find({title: "Pee Wee Herman's Big Adventure"}).pretty()

// delete the movie "Avatar"
db.movieList.remove({title : "Avatar"})
db.movieList.find({title: "Avatar"}).pretty()
