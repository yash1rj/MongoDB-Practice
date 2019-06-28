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

// Update prodName of nosql distilled
db.product_catalog.update(
    {"prodName" : "nosql distilled"},
    {$set: {"prodName" : "Nosql Distilled - Second Edition"}}
)

// Updating multiple documents
// Changing genre(value is a document)
db.product_catalog.updateMany(
    {"genre.academic": "technical"},
    {$set:{"genre.academic": "Computer Science Technology"}}
)

// upsert
// upsert --> Optional --> If set to true, creates a new document when no document matches the query criteria. The default value is false, which does not insert a new document when no match is found.
db.product_catalog.updateMany(
    {"price": {$gt: 80000}, "manufacturer": "apple"},
    {$set: {"prodName": "iphone 7 plus"}}, 
    {upsert: true}
)

// From running the above query the price attribute is not added to the document beacause it contains comparison operator
db.product_catalog.find({})

// increase book price
db.product_catalog.update(
    {"ISBN" : 18407806},
    {$inc: {price: 50}}
)

// $inc on a field not present in document
db.product_catalog.update(
    {"ISBN" : 18407806},
    {$inc: {quantity: 10}}
)

// Trying out $unset operator
db.product_catalog.update(
    {"ISBN" : 18407806},
    {$unset: {quantity: ""}}
)

// Updating arrays using $push
db.product_catalog.update(
    {prodId: 7000001},
    {$push: {"colors": "white"}}
)

// Reduce price of book with prodId: 7000013 from 700 to 500
db.product_catalog.update(
    {prodId: 7000013},
    {$inc: {price: -200}}
)

// Adding more colors to iphone 7 in one query
db.product_catalog.update(
    {prodId: 7000001},
    {$push: {colors: {$each: ["midnight blue", "red"]}}}
)

// Removing product from inventory
db.product_catalog.deleteOne({prodName: "Java for Dummies"})

// View collection
db.product_catalog.find({})

// Inserting more documents
db.product_catalog.insert([{
        "manufacturer": "apple",
        "price": 20000,
        "display": '4.7 inch Retina HD',
        "model": 'iPhone 6S',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "samsung",
        "price": 15000,
        "android": 'Oreo',
        "model": 'Note 4',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "samsung",
        "price": 5450,
        "processor": 'Exynos 8895 Octa Core',
        "model": 'Galaxy S8',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "apple",
        "price": 50000,
        "display": '5.5 inch Retina HD',
        "model": 'iPhone 6 plus',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "samsung",
        "price": 10570,
        "processor": 'Exynos 8890',
        "model": 'Galaxy S7 Edge',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "lenovo",
        "price": 10000,
        "android": 'Oreo',
        "model": 'K8 Plus',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "lenovo",
        "price": 9920,
        "battery": 4000,
        "model": 'K6 Note',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "lenovo",
        "price": 10000,
        "material": 'metal unibody',
        "model": 'Vibe K5 Note',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "apple",
        "price": 19999,
        "camera": '12 MP',
        "model": 'iPhone SE',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "mi",
        "price": 20000,
        "android": 'Oreo',
        "model": 'Max 2',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "mi",
        "price": 33000,
        "camera": '12 MP',
        "model": 'Mix 2',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "mi",
        "price": 15000,
        "memory": '64 GB',
        "model": 'A1',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "mi",
        "price": 15000,
        "display": '5 inch HD',
        "model": '4i',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "moto",
        "price": 10000,
        "android": 'Nougat',
        "model": 'E4 Plus',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "moto",
        "price": 7000,
        "ram": '2 GB',
        "model": 'C Plus',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "samsung",
        "price": 14000,
        "ram": '4 GB',
        "model": 'Galaxy On Max',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "honor",
        "price": 18000,
        "battery": 3340,
        "model": '9i',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    },
    {
        "manufacturer": "google",
        "price": 45000,
        "android": 'Oreo',
        "model": 'Pixel 2',
        "categories": {
            'main': 'electronics',
            'sub': 'smartphones'
        }
    }
])

// View collection
db.product_catalog.find({})

// Count smartphones
db.product_catalog.count({"categories.sub": "smartphones"})

// Distinct manufacturers
db.product_catalog.distinct("manufacturer")

// Aggregate totalPrice of smartphones for each manufacturer
db.product_catalog.aggregate([
    {$project: {"_id": 0, "price": 1, "manufacturer": 1}},
    {$group: {_id: "$manufacturer", totalPrice: {$sum: "$price"}}}
])

// Aggregate count of products by each manufacturer
db.product_catalog.aggregate([
    {$group: { _id: "$manufacturer", totalProducts: {$sum: 1}}}
])

// Make a new collection of 5 cheapeast mobile
db.product_catalog.aggregate([
    {$match: {"categories.sub": "smartphones"}},
    {$sort: {"price": 1},
    {$limit: 5},
    {$out: "fiveCheapestMobiles"}
])

// View the made collection
db.fiveCheapestMobiles.find()

// Find Lenovo phones of price less than 10k
db.product_catalog.aggregate([
    {$match: {$and: [{"manufacturer": "lenovo"}, {"price": {$lt: 10000}}]}    
])

// Aggregate totalPrice and count of smartphones for each manufacturer
db.product_catalog.aggregate([
    {$project: {"_id": 0, "price": 1, "manufacturer": 1}},
    {$group: {
        _id: "$manufacturer", 
        totalPrice: {$sum: "$price"}, 
        totalCount: {$sum: 1}}
    }
])

// Retrieve top 10 most expensive mobile in a new collection
db.product_catalog.aggregate([
    {$match: {"categories.sub": "smartphones"}}, 
    {$sort: {"price": -1}},
    {$limit: 10},
    {$out: "expensiveTen"}
])

// view the expensive mobiles collection
db.expensiveTen.find()

// Retrieve ten least expensive mobiles and store in topTenCheapestMobiles collection
db.product_catalog.aggregate([
    {$match: {"categories.sub": "smartphones"}},
    {$sort: {"price": 1},
    {$limit: 10},
    {$out: "topTenCheapestMobiles"}
])

// view the topTenCheapestMobiles collection
db.topTenCheapestMobiles.find()

// Retrieve mobiles manufactured by MI and store only the manufacturer and model of phone
db.product_catalog.aggregate([
    {$project: {"_id": 0, "manufacturer":1, "model": 1}},
    {$match: {"manufacturer": "mi"}},
    {$out: "MIMobiles"}
])

// View MI mobile collection
db.MIMobiles.find()

// Retrieve mobiles manufactured by samsung and store only the manufacturer and model of phone
db.product_catalog.aggregate([
    {$project: {"_id": 0, "manufacturer":1, "model": 1}},
    {$match: {"manufacturer": "samsung"}},
    {$out: "SamsungMobiles"}
])

// View MI mobile collection
db.SamsungMobiles.find()


// The performance for queries based on indexed and non-indexed fields can be analyzed using explain("executionStats")

// Query retrieve products in price range of 5k to 20k -- without the price field being indexed
db.product_catalog.find(
    {"price": {$gte: 5000, $lte: 20000}}
).explain("executionStats")

// Here, query returns 15 documents out of the 22 scanned

// Indexes can reduce the no. of docs scanned and improve the performance

// Creating index on a single field  - price
db.product_catalog.createIndex({price: -1})

// Here, we are creating a descending index on the price field

// A descending index sorts values of that column in decending order. An ascending index does just the opposite

// Let's see now how the performance is affected by doing so
// Query retrieve products in price range of 5k to 20k -- the price field being indexed
db.product_catalog.find(
    {"price": {$gte: 5000, $lte: 20000}}
).explain("executionStats")

// Now, the query scans only the 15 documents which matches our specified criteria

// Compound index
// For retrieving products with price less than 5k and rating is 4
// In this case, it may not be sufficient to create an index on just one field. Our query needs to filter multiple criteria
// Example:  db.product_catalog.createIndex({"price": 1,  rating: -1})

// Text Indexes
// Customers would like to perform text based searches. For eg. search for either the main category or more specifically the sub-category

// creating a text index on the categories field
db.product_catalog.createIndex({categories: "text"})

// Now, to really optimize the retrieval of documents using the text index :
// the $text operator is used to perform text search on the indexed field to retrieve the details of the smartphones
db.product_catalog.find({$text: { $search: "smartphones" }})

// Retrive all indexes of product_catalog collection
db.product_catalog.getIndexes()

// drop index
db.product_catalog.dropIndex("categories_text")
// or
db.product_catalog.dropIndex({categories: "text"})

// Delete all indexes
db.product_catalog.dropIndexes()

// Custom naming of index
// 15/22
db.product_catalog.find(
    {"price": {$gte: 5000, $lte: 20000}}
).explain("executionStats")

db.product_catalog.createIndex(
    {"price": -1},
    {name: "price_index_desc"}
)

// After indexing
// 15/15
db.product_catalog.find(
    {"price": {$gte: 5000, $lte: 20000}}
).explain("executionStats")
