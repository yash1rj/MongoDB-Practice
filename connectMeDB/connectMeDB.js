// Using a database named connectMeDB
use connectMeDB

// Make a collection named user_profiles
db.createCollection("user_profiles")

// Inserting documents into user_profiles collection
db.user_profiles.insert([
    {
        UserId: "amy01",
        Name: "Amy James",
        Gender: "Female",
        Location: "India", 
        Age: 19, 
        University: "Delhi University"
    },
    {
        UserId: "jimmy999",
        Name: "Jim Watson",
        From: "Canada", 
        Location: "Mexico", 
        Office: "Google"
    },
    {
        UserId: "rachel_11",
        Name: "Rachel Greene",
        Location: "New York", 
        PhoneNo: 123456789, 
        University: "Vassar University", 
        Graduated: 2014
    }
])

// View the collection
db.user_profiles.find({})

// Retrieve documents of people whose location is "New York" and graduated between 2013-2015(both inclusive) and display only names and userId
db.user_profiles.find({
    $and: [
        {Location: "New York"},
        {Graduated: {$gte: 2013, $lte: 2015}}
    ]},
    {_id: 0, UserId: 1, Name: 1}
)

// Updating profile Info
db.user_profiles.update(
    {UserId: "amy01"},
    {$set: {Siblings: ["Luke James", "Anna James", "Sharon James"], University: "Anna University", Age: 21}}
)

// Updating profile Info
db.user_profiles.update(
    {UserId: "jimmy999"},
    {$set: {University: "University of Colorado", Age: 42, "Favorite Football Team": "Manchester United F.C"}}
)

// Deleting all profiles whose age is 40 and located in "Mexico"
db.user_profiles.deleteMany({
    $and: [
        {Age: {$gt: 40}},
        {Location: "Mexico"}
    ]
})

// View the collection
db.user_profiles.find({})

// Retrieve documents of people whose location is "New York" and graduated between 2013-2015(both inclusive) and display only names and userId
db.user_profiles.find({
    $and: [
        {Location: "New York"},
        {Graduated: {$gte: 2013, $lte: 2015}}
    ]},
    {_id: 0, UserId: 1, Name: 1}
)

// Updating profile Info
db.user_profiles.update(
    {UserId: "amy01"},
    {$set: {Siblings: ["Luke James", "Anna James", "Sharon James"], University: "Anna University", Age: 21}}
)

// Updating profile Info
db.user_profiles.update(
    {UserId: "jimmy999"},
    {$set: {University: "University of Colorado", Age: 42, "Favorite Football Team": "Manchester United F.C"}}
)

// Deleting all profiles whose age is 40 and located in "Mexico"
db.user_profiles.deleteMany({
    $and: [
        {Age: {$gt: 40}},
        {Location: "Mexico"}
    ]
})

// View the collection
db.user_profiles.find({})

// creating an ascending single field index called asc_userid on the UserId field
db.user_profiles.createIndex(
    {"UserId": 1},
    {name: "asc_userid"}    
)

// create text index on Location field
db.user_profiles.createIndex({Location: "text"})

// create a descending single field index named as desc_phNo on the phone number field
db.user_profiles.createIndex(
    {"PhoneNo": -1},
    {name: "desc_phNo"}    
)

// View indexes created
db.user_profiles.getIndexes()
