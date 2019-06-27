use practice

(function() {
  var names = [
    'Yolanda',
    'Iska',
    'Malone',
    'Frank',
    'Foxton',
    'Pirate',
    'Poppelhoffen',
    'Elbow',
    'Fluffy',
    'Paphat'
  ]
  var randName = function() {
    var n = names.length;
    return [
      names[Math.floor(Math.random() * n)],
      names[Math.floor(Math.random() * n)]
    ].join(' ');
  }
  var randAge = function(n) {
    return Math.floor(Math.random() * n);
  }
  for (var i = 0; i < 1000; ++i) {
    var person = {
      name: randName(),
      age: randAge(100)
    }
    if (Math.random() > 0.8) {
      person.cat = {
        name: randName(),
        age: randAge(18)
      }
    }
    db.people.insert(person);
  };
})();

db.people.find({})

// Use find to get all the people who are exactly 99 years old
db.people.find({age: 99})

// Find all the people who are eligible for a bus pass (people older than 65)
db.people.find({age: {$gt: 65}}).sort({ age: 1 })

// Find all the teenagers, greater than 12 and less than 20.
db.people.find({age: {$gt: 12, $lt: 20}}).sort({ age: 1 })

// Find all the people with cats.
db.people.find({cat: {$exists: true}})

// Find all the pensioners with cats.
db.people.find({
    $and: [
        {age: {$gt: 65}},
        {cat: {$exists: true}}
    ]
}).sort({ age: 1 })

// Find all the teenagers with teenage cats.
db.people.find({
    $and: [
        {age: {$gt: 12, $lt: 20}},
        {cat: {$exists: true}},
        {"cat.age": {$gt: 12, $lt: 20}}
    ]
})

// Find out how many people there are in total.
db.people.count()

// Using your collection of people, and $exists, tell me how many people have cats.
db.people.find({cat: {$exists: true}}).count()

// Use $where to count how many people have cats which are older than them
db.people.find({cat: {$exists: true}, $where: "this.cat.age > this.age"})

// Functional Loops - forEach and map

db.people.find().forEach(function(person) {
    print(person.name);
});

// We also have access to map, which will return an array of values which we can store
db.people.find().map(function(person) {
    print(person.name);
});

// We can use the aggregation pipeline to filter a result set. This is more or less analogous to find, and is probably the most common thing we want to do.

// Say we want to list only people who have cats (where cat is a sub-document), we would probably do something like this this:

db.people.find({
  cat:{
    $exists: true
  }
})
// We can get the same result in the aggregation framework using $match, like so:

db.people.aggregate({
  '$match' : {
    cat: {
      $exists: true
    }
  }
})
// So why use aggregation over find? In this example they are the same, but the power comes when we start to chain additional functions as we shall soon see.

db.people.insert({
	"name" : "Maggi Fluffy",
	"age" : 10,
	"cat" : {
		"name" : "Paphat Maggi",
		"age" : 10
	}
})

// Match all the people who are 10 years old who have ten year old cats.
db.people.aggregate({
    $match: {
        cat: { $exists: true},
        age: 10,
        "cat.age": 10
    }
})

// Same as above
db.people.find({$and: [{cat: { $exists: true}}, {"age": 10}, {"cat.age": 10}]})

// Match all the people who are over 80 years old, and who's cats are over 15 years old.
db.people.aggregate({
    $match: {
        age: { $gt: 80},
        "cat.age": { $gt: 15}
    }
})
