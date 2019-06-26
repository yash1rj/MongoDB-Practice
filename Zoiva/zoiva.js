// Using a database named Zoiva
use Zoiva

// Make a collection named product_catalog
db.createCollection("product_catalog")

// Inserting documents into the collection
db.product_catalog.insert(
    {
        prodId: 7000010,
        prodName: "nosql distilled",
        publisher: "Addison-Wesley",
        genre: {academic: "technical"},
        ISBN: 1234567,
        price: 400
})

db.product_catalog.insert([
    {
        prodId: 7000012,
        prodName: "Java for Dummies",
        publisher: "John Wiley",
        genre: {academic: "technical"},
        ISBN: 18407806,
        price: 400
    },
    {
        prodId: 7000013,
        prodName: "Big Data: Principles and Best practices",
        publisher: "Dreamtech",
        genre: {academic: "technical"},
        ISBN: 1234567,
        price: 700
    },
    {
        prodId: 7000001,
        prodName: "iphone 7",
        manufacturer: "apple",
        categories: {main: "electronics", sub: "smartphones"},
        year_of_launch: 2017,
        price: 60000,
        colors: ["silver", "black", "gold", "rosegold"]
    }
])


// View the collection
db.product_catalog.find({})

// Retrieve electronics product
db.product_catalog.find({"categories.main": "electronics"})

// Retrive prodName of products available in black color
db.product_catalog.find({colors: "black"}, {prodName: 1})

// Retrieve smartPhones manufactured by apple
db.product_catalog.find({
    $and: [
        {"categories.sub": "smartphones"},
        {manufacturer: "apple"}
    ]
})

// Retrieve only the prodName and price of smartPhones manufactured by apple
db.product_catalog.find({
    $and: [
        {"categories.sub": "smartphones"},
        {manufacturer: "apple"}
    ]
}, {_id: 0, prodName: 1, price: 1})

// Retrieve only the prodName of products whose category is not electronics
db.product_catalog.find({"categories.main": {$ne: "electronics"}}, {_id: 0, prodName: 1})

// $all --> Matches arrays that contain all elements specified in the query.

// Retrieve only the prodName of products having both black and silver colors
db.product_catalog.find(
    {colors: {$all: ["black", "silver"]}}, 
    {_id: 0, prodName: 1}
)

// $elemMatch --> Selects documents if element in the array field matches all the specified $elemMatch conditions.
// Syntax: { <field>: { $elemMatch: { <query1>, <query2>, ... } } }
// Behavior: a> You cannot specify a $where expression in an $elemMatch.
//           b> You cannot specify a $text query expression in an $elemMatch.


// $size --> Selects documents if the array field is a specified size.
// Example: db.collection.find( { field: { $size: 2 } } );
//          The above returns all documents in collection where field is an array with 2 elements.

// $type --> Selects documents if a field is of the specified type.
// Syntax: 1> { field: { $type: <BSON type> } }
//         2> { field: { $type: [ <BSON type1> , <BSON type2>, ... ] } }

// Retrieve products where rating field is "Null" datatype
db.product_catalog.find({rating: {$type: 10}})
// or use the below -- using alias
db.product_catalog.find({rating: {$type: "null"}})

// Retrieve Apple's electronics products from product_catalog collection
// Also check if phones with black and silver colors with release yeas as 2017-2018(both inclusive) and having price above 55000 rupees are available or not
db.product_catalog.find({
    $and: [
        {"manufacturer": "apple"},
        {"colors": {$all: ["black", "silver"]}},
        {"year_of_launch": {$in: [2017, 2018]}},
        {price: {$gte: 55000}} 
    ]
})
