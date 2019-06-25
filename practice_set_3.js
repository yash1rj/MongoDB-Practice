// Creating a database for a small-time CRM (Customer Relationship Management) system

// Using a database named crm
use crm

// Make a collection named customers
db.createCollection("customers")


// Add a new customer with a business_name of Acme, num_employees of 1200, account_value of 50000
db.customers.insert({
    business_name: "Acme", 
    num_employees: 1200, 
    account_value: 50000
})

// Add a new customer with a business_name of Apple, num_employees of 35100, account_value of 23000000
db.customers.insert({
    business_name: "Apple", 
    num_employees: 35100, 
    account_value: 23000000
})

// Add a new customer with a business_name of Ma&Pa, num_employees of 15, account_value of 1200
db.customers.insert({
    business_name: "Ma&Pa", 
    num_employees: 15, 
    account_value: 1200
})


// View the customers collection
db.customers.find({}).pretty()

// Select all customers with an account value of greater than 10000
db.customers.find({account_value: {$gt: 10000}}).pretty()

// Select only names of businesses that have less than 2000 employees
db.customers.find({num_employees: {$lt: 2000}}).pretty()

// Select all customers sorted by number of employees (ascending, or lowest to highest)
db.customers.find({}).sort({ num_employees: 1 }).pretty()

// Select the id of customers whose business name's begin with 'A'
db.customers.find({business_name: /^[A]/}).pretty()

// Not working
// Same as above---Using where clause
db.customers.find({$where: function() { 
        return (this.business_name.charAt() == "A")
    } 
})


// Add a rep for each record in the collection:

// For Acme, rep name: 'Wile E. Coyote', employee #: 4311
db.customers.update({business_name: "Acme"}, { $set: { rep: {name: "Wile E. Coyote", employee_number: 4311} } })

// For Apple, rep name: 'Fan Boi', employee #: 1216
db.customers.update({business_name: "Apple"}, { $set: { rep: {name: "Fan Boi", employee_number: 1216} } })

// For Ma&Pa, rep name: 'Jedediah', employee #: 5918
db.customers.update({business_name: "Ma&Pa"}, { $set: { rep: {name: "Jedediah", employee_number: 5918} } })

// View customers collection
db.customers.find({}).pretty()


// Update every customer to have an active status of true
db.customers.update({}, { $set: { active: "true" } }, {multi: true})


// Update Ma&Pa to have 20 employees and an account_value of 2500
db.customers.update({business_name: "Ma&Pa"},{$inc: {num_employees: 5, account_value: 1300})\


// Select the rep names of every customer
db.customers.find({}, {"rep.name": 1}).pretty()
