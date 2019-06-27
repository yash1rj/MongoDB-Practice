use practice

db.createCollection("colAgregation")

db.colAgregation.insertMany(
    [{
        title: 'MongoDB Overview', 
        description: 'MongoDB is no sql database',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    },
    {
        title: 'NoSQL Overview', 
        description: 'No sql database is very fast',
        by_user: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 10
    },
    {
        title: 'Neo4j Overview', 
        description: 'Neo4j is no sql database',
        by_user: 'Neo4j',
        url: 'http://www.neo4j.com',
        tags: ['neo4j', 'database', 'NoSQL'],
        likes: 750
    }]
)

// View collection
db.colAgregation.find()

// aggregate() methods

// $sum
db.colAgregation.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])

db.colAgregation.aggregate([{$group : {_id : "$by_user", total_likes : {$sum : "$likes"}}}])

// $avg
db.colAgregation.aggregate([{$group : {_id : "$by_user", avg_likes : {$avg : "$likes"}}}])

// $min --> Gets the minimum of the corresponding values from all documents in the collection.
db.colAgregation.aggregate([{$group : {_id : "$by_user", min_likes : {$min : "$likes"}}}])

// $max -->	Gets the maximum of the corresponding values from all documents in the collection.	
db.colAgregation.aggregate([{$group : {_id : "$by_user", max_likes : {$max : "$likes"}}}])

// $push --> Inserts the value to an array in the resulting document.	
db.colAgregation.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])

// $addToSet --> Inserts the value to an array in the resulting document but does not create duplicates.	
db.colAgregation.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])

// $first --> Gets the first document from the source documents according to the grouping. Typically this makes only sense together with some previously applied “$sort”-stage.	
db.colAgregation.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])

// $last --> Gets the last document from the source documents according to the grouping. Typically this makes only sense together with some previously applied “$sort”-stage.	
db.colAgregation.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])
