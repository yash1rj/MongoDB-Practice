// Using a database named rel
use relations

// Make a collection named users
db.createCollection("users")

// Insert the following documents into a users collection
db.users.insert({
    username : "GoodGuyGreg",
    first_name : "Good Guy",
    last_name : "Greg"
})

db.users.insert({
    username : "ScumbagSteve",
    full_name : {
        first : "Scumbag",
        last : "Steve"
    }
})

// db.users.find({"full_name.last": "Steve"}).pretty()

// Make a collection named posts
db.createCollection("posts")

// Inserting documents into posts collection
db.posts.insert({
    username : "GoodGuyGreg",
    title : "Passes out at party",
    body : "Wakes up early and cleans house"
})

db.posts.insertMany([{
    username : "GoodGuyGreg",
    title : "Steals your identity",
    body : "Raises your credit score"
}, {
    username : "GoodGuyGreg",
    title : "Reports a bug in your code",
    body : "Sends you a Pull Request"
}, {
    username : "ScumbagSteve",
    title : "Borrows something",
    body : "Sells it"
}, {
    username : "ScumbagSteve",
    title : "Borrows everything",
    body : "The end"
}, {
    username : "ScumbagSteve",
    title : "Forks your repo on github",
    body : "Sets to private"
}])

// View the collection posts
db.posts.find({}).pretty()

// Make a collection named posts
db.createCollection("comments")

// Inserting documents into comments collection
db.comments.insert({
    username : "GoodGuyGreg",
    comment : "Hope you got a good deal!",
    post : ObjectId("5d11fe4bde9c301c38080b9b")
})

db.comments.insertMany([{
    username : "GoodGuyGreg",
    comment : "What's mine is yours!",
    post : ObjectId("5d11fe4bde9c301c38080b9c")
}, {
    username : "GoodGuyGreg",
    comment : "Don't violate the licensing agreement!",
    post : ObjectId("5d11fe4bde9c301c38080b9d")
}, {
    username : "ScumbagSteve",
    comment : "It still isn't clean",
    post : ObjectId("5d11fda7de9c301c38080b98")
}, {
    username : "ScumbagSteve",
    comment : "Denied your PR cause I found a hack",
    post : ObjectId("5d11fe4bde9c301c38080b9a")
}])

// View the collection comments
db.comments.find({}).pretty()


// find all users
db.users.find({}).pretty()

// find all posts
db.posts.find({}).pretty()

// find all posts that was authored by "GoodGuyGreg"
db.posts.find({username: "GoodGuyGreg"}).pretty()

// find all posts that was authored by "ScumbagSteve"
db.posts.find({username: "ScumbagSteve"}).pretty()

// find all comments
db.comments.find({}).pretty()

// find all comments that was authored by "GoodGuyGreg"
db.comments.find({username: "GoodGuyGreg"})

// find all comments that was authored by "ScumbagSteve"
db.comments.find({username: "ScumbagSteve"})

// find all comments belonging to the post "Reports a bug in your code"
// db.posts.findOne({title: "Reports a bug in your code"})
// db.posts.findOne({title: "Reports a bug in your code"})._id
db.comments.find({post: db.posts.findOne({title: "Reports a bug in your code"})._id})
