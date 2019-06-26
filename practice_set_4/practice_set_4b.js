// Trying again
// find the restaurants that achieved a score, more than 80 but less than 100
db.restaurants.find({"grades.score": {$gt: 80, $lt: 100}})
// Still Not correct
// Correct Solution
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});
// Use $elemMatch operator to specify multiple criteria on the elements of an array such that at least one array element satisfies all the specified criteria.

// find the restaurants which locate in latitude value less than -95.754168
db.restaurants.find({"address.coord": {$lt: -95.754168}})

// find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168
db.restaurants.find({$and: 
    [
        {cuisine: {$ne: "American"}}, 
        {"grades.score": {$gt: 70}}, 
        {"address.coord": {$lt: -65.754168}}
    ]
})

// find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168
// Without AND operator
db.restaurants.find({
    cuisine: {$ne: "American"}, 
    "grades.score": {$gt: 70}, 
    "address.coord": {$lt: -65.754168}
})

// find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order
db.restaurants.find({$and: 
    [
        {cuisine: {$ne: "American"}}, 
        {"grades.grade": "A"}, 
        {"borough": {$ne: "Brooklyn"}}
    ]
}).sort({ cuisine: -1 })

//  find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name
db.restaurants.find({name: /^Wil+/}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name
db.restaurants.find({name: /ces$/}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name
db.restaurants.find({name: /Reg/}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish
// Giving correct result
db.restaurants.find({
    borough: "Bronx", 
    $or: [
        {"cuisine": "American "}, 
        {"cuisine": "Chinese"}
    ]
})

// Correct query for above
db.restaurants.find({ 
    "borough": "Bronx" ,
    $or : [
        { "cuisine" : "American " },
        { "cuisine" : "Chinese" }
    ] 
})

// Also Correct
db.restaurants.find({borough: "Bronx", cuisine: {$in: ["American ", "Chinese"]}})

// find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronx or Brooklyn
db.restaurants.find({"borough": {$in: ["Staten Island","Queens","Bronx","Brooklyn"]}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// find the restaurant Id, name, borough and cuisine for those restaurants which are NOT belonging to the borough Staten Island or Queens or Bronxor Brooklyn
db.restaurants.find({"borough": {$nin: ["Staten Island","Queens","Bronx","Brooklyn"]}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10

// Giving wrong result
db.restaurants.find({"grades.score": {$lte: 10}}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})

// Verifying above result -- Correct query
db.restaurants.find({
    "grades.score" : { 
        $not: {$gt : 10}
    }
},  {
        "restaurant_id" : 1,
        "name":1,"borough":1,
        "cuisine" :1
});

// find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'
db.restaurants.find({
    $or: [
        {"name": /^Wil/},
        {"cuisine": {$nin: ["American ", "Chinese"]}
    ]
}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})

// Verification of above
db.restaurants.find({
    $or: [
        {"name": /^Wil/},
        {$and: [
            {"cuisine" : {$ne: "American "}}, 
            {"cuisine" : {$ne: "Chinese"}}
        ]}
    ]
}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})

// find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates
db.restaurants.find({
    $and: [
        {"grades.grade": "A"},
        {"grades.score": 11},
        {"grades.date": ISODate("2014-08-11T00:00:00Z")}
    ]
}, {"restaurant_id": 1, "name": 1, "grades": 1})

// Same as above
db.restaurants.find( 
    {
     "grades.date": ISODate("2014-08-11T00:00:00Z"), 
     "grades.grade":"A" , 
     "grades.score" : 11
    }, 
    {"restaurant_id" : 1,"name":1,"grades":1}
);

// find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z"
db.restaurants.find({
    $and: [
        {"grades.1.grade": "A"},
        {"grades.1.score": 9},
        {"grades.1.date": ISODate("2014-08-11T00:00:00Z")}
    ]
}, {"restaurant_id": 1, "name": 1, "grades": 1})

// find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52
db.restaurants.find({"address.coord.1": {$gt: 42, $lte: 52}} , {"restaurant_id": 1, "name": 1, "address": 1})

// to arrange the name of the restaurants in ascending order along with all the columns
db.restaurants.find({}).sort({ "name": 1 })

// to arrange the name of the restaurants in descending along with all the columns
db.restaurants.find({}).sort({ "name": -1 })

// to arranged the name of the cuisine in ascending order and for that same cuisine borough should be in descending order
db.restaurants.find({}).sort({ "cuisine": 1, borough: -1})

// to know whether all the addresses contains the street or not
db.restaurants.find({"address.street": {$exists: true}})

// select all documents in the restaurants collection where the coord field value is Double
db.restaurants.find({"address.coord": {$type: 1}})

// select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7
db.restaurants.find({"grades.score": {$mod: [7, 0]}}, {"restaurant_id": 1, "name": 1, "grades": 1})

// find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contains 'mon' as three letters somewhere in its name
db.restaurants.find({"name": /mon/i}, {"name": 1, "borough": 1, "address.coord": 1, "cuisine": 1})

// Same as above
db.restaurants.find({ 
    "name" : 
        { $regex : "mon.*", $options: "i" } 
}, {"name": 1, "borough": 1, "address.coord": 1, "cuisine": 1})

// find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name
db.restaurants.find({"name": /^Mad/}, {"name": 1, "borough": 1, "address.coord": 1, "cuisine": 1})
