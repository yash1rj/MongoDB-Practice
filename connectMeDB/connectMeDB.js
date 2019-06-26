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
