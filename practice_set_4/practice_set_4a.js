// Using a database named resto
use resto

// Import the collection : restaurants from JSON file

// display all the documents in the collection restaurants
db.restaurants.find({}).pretty()

// display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant
db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()

// display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()

// display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1}).pretty()

// display all the restaurant which is in the borough Bronx
db.restaurants.find({borough: "Bronx"}).pretty()

// display the first 5 restaurant which is in the borough Bronx
db.restaurants.find({borough: "Bronx"}).limit(5).pretty()

// display the next 5 restaurants after skipping first 5 which are in the borough Bronx
db.restaurants.find({borough: "Bronx"}).skip(5).limit(5).pretty()

// find the restaurants who achieved a score more than 90
db.restaurants.find({"grades.score": {$gt: 90}}).pretty()
// Same as above
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}});

//  find the restaurants that achieved a score, more than 80 but less than 100
// Check Again --- Not correct
db.restaurants.find({$and: [{"grades.score": {$gt: 80}}, {"grades.score": {$lt: 100}}]}).pretty()
// Same as above --- Correct
db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});
