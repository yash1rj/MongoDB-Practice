use listique

db.products.insert({
	"_id" : 1001,
	"pName" : "Asus Zenfone",
	"pDescription":"an economical phone by Asus",
	"pRating" : 3.5,
	"pCategory" : "Electronics",
	"price" : 11599,
	"color" : "Black",
	"specification" : {"camera":"13MP", "memory":"32GB", "RAM":"3GB"},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
	"_id" : 1002,
	"pName" : "Redmi Note 2",
	"pDescription" : "an economical phone by Xiaomi",
	"pRating" : 4,
	"pCategory" : "Electronics",
	"price" : 8599,
	"color" : "Black",
	"specification" : {"camera":"12MP", "memory":"32GB", "RAM":"3GB"}, 
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
	"_id" : 1003,
	"pName" : "Moto G turbo",
	"pDescription" : "an economical phone by Moto",
	"pRating" : 4,
	"pCategory" : "Electronics",
	"price" : 13599,
	"color" : "Black",
	"specification" : {"camera":"8MP", "memory":"32GB", "RAM":"4GB"},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
	"_id" : 1004,
	"pName" : "Lenovo Vibe X3",
	"pDescription" : "a high end phone by Lenovo",
	"pRating" : 4.5,
	"pCategory" : "Electronics",
	"price" : 19999,
	"color" : "Black",
	"specification" : {"camera":"16MP", "memory":"64GB", "RAM":"3GB"},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
	"_id" : 1005,
	"pName" : "iphone 8 plus",
	"pDescription" : "a high end phone by apple",
	"pRating" : 4.9,
	"pCategory" : "Electronics",
	"price" : 19999,
	"color" : "Rose Gold",
	"specification" : {"camera":"12MP", "memory":"128GB", "RAM":"2GB"},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1006,
    "pName" : "Adidas Running Men Lite",
    "pDescription" : "a pair of light weight running shoes by adidas",
    "pRating" : 4.0,
    "pCategory" :  "Shoes",
    "price" : "2599",
    "color" : "Blue",
    "specification" : {"sizes":[6,7,8,9,10], "recommended_sports":["running","light workout","cardio"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});

db.products.insert({
    "_id" : 1007,
    "pName" : "Adidas Running Women Lite",
    "pDescription" : "a pair of light weight running shoes by adidas",
    "pRating" : 4.0,
    "pCategory" :  "Shoes",
    "price" : 2599,
    "color" : "Pink",
    "specification" : {"sizes":[4,5,6,7,8], "recommended_sports":["running","light workout","cardio"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1008,
    "pName" : "Adidas Running Men robust",
    "pDescription" : "a pair of robust running shoes by adidas",
    "pRating" : 4.0,
    "pCategory" :  "Shoes",
    "price" : 3599,
    "color" : "Blue",
    "specification" : {"sizes":[6,7,8,9,10], "recommended_sports":["running","light workout","cardio"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1009,
    "pName" : "Reebok training shoes",
    "pDescription" : "a pair of light weight training shoes by Reebok",
    "pRating" : 3.0,
    "pCategory" :  "Shoes",
    "price" : 1599,
    "color" : "Grey",
    "specification" : {"sizes":[6,7,8,9,10], "recommended_sports":["running","light workout","cardio"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1010,
    "pName" : "Nike Running Men Lite",
    "pDescription" : "a pair of light weight running shoes by Nike",
    "pRating" : 4.6,
    "pCategory" :  "Shoes",
    "price" : 6599,
    "color" : "Green",
    "specification" : {"sizes":[6,7,8,9,10], "recommended_sports":["running","light workout","cardio"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1011,
    "pName" : "Computer Table by Zuari",
    "pDescription" : "sunmica finished zuari computer table",
    "pRating" : 4.0,
    "pCategory" :  "Furniture",
    "price" : 8999,
    "color" : "Beige",
    "specification" : {"material":"Particle board", "usage":["office", "home"] },
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1012,
    "pName" : "Study Table by Zuari",
    "pDescription" : "sunmica finished zuari study table",
    "pRating" : 4.3,
    "pCategory" :  "Furniture",
    "price" : 6999,
    "color" : "Coffee Brown",
    "specification" : {"material":"Particle board", "usage":["office", "home"] },
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1013,
    "pName" : "Dressing Table by Zuari",
    "pDescription" : "sunmica finished zuari Dressing table",
    "pRating" : 4.0,
    "pCategory" :  "Furniture",
    "price" : 2599,
    "color" : "Beige",
    "specification" : {"material":"Particle board", "usage":["office", "home"] },
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1014,
    "pName" : "Recliner sofa set by Grihshobha",
    "pDescription" : "A luxurious and comfortable sofa set by Grihshobha furniture makers",
    "pRating" : 4.8,
    "pCategory" :  "Furniture",
    "price" : 125000,
    "color" : "Dark grey",
    "specification" : {"material":"leather", "usage":["home"] },
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1015,
    "pName" : "Dining table by @HOME",
    "pDescription" : "Teak wood dining table with glass top",
    "pRating" : 4.4,
    "pCategory" :  "Furniture",
    "price" : 18999,
    "color" : "caramel",
    "specification" : {"material":"Teakwood", "usage":["home"] },
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1016,
    "pName" : "Kurta Plazzo ethnic set",
    "pDescription" : "embroidery work kurta plazzo set for women",
    "pRating" : 4.0,
    "pCategory" :  "Clothing",
    "price" : 1499,
    "color" : "Cyan",
    "specification" : {"size":["M","XL"], "fabric":"cotton", "gender":["F"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1017,
    "pName" : "Cotton silk saree by FabIndia",
    "pDescription" : "cotton silk hand woven sarees by Fabindia",
    "pRating" : 4.8,
    "pCategory" :  "Clothing",
    "price" : 5900,
    "color" : "Red",
    "specification" : {"size":["standard"], "fabric":"silk", "gender":["F"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1018,
    "pName" : "Modi coat for men ethnic",
    "pDescription" : "Khadi cotton hand woven modi coat for men",
    "pRating" : 4.8,
    "pCategory" :  "Clothing",
    "price" : 1900,
    "color" : "yellow",
    "specification" : {"size":["M"], "fabric":"cotton", "gender":["M"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1019,
    "pName" : "US Polo T-shirt",
    "pDescription" : "100 % pure cotton t shirt by US polo",
    "pRating" : 4.8,
    "pCategory" :  "Clothing",
    "price" : 3299,
    "color" : "White",
    "specification" : {"size":["S","M","L"], "fabric":"cotton", "gender":["M"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});
db.products.insert({
    "_id" : 1020,
    "pName" : "UCB T-shirt",
    "pDescription" : "100 % pure cotton t shirt by UCB",
    "pRating" : 4.2,
    "pCategory" :  "Clothing",
    "price" : 1900,
    "color" : "Black",
    "specification" : {"size":["S","M","L","XL"], "fabric":"cotton", "gender":["F","M"]},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});

db.products.insert({
    "_id" : 1021,
    "pName" : "Table lamp",
    "pDescription" : "Metal table lamp with fabric shade",
    "pRating" : 4.0,
    "pCategory" :  "Furniture",
    "price" : 1800,
    "color" : "Blue",
    "specification" : {"material":"14 inch silver base, 16 inch shade", "usage":["home"] },
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});

db.products.insert({
    "_id" : 1022,
    "pName" : "Mi A1",
    "pDescription" : "Qualcomm 625 Octa core with stock android from Mi",
    "pRating" : 5,
    "pCategory" :  "Electronics",
    "price" : 15000,
    "color" : "Black",
    "specification" : {"camera":"12MP", "memory":"64GB", "RAM":"4GB"},
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});

db.products.insert({
    "_id" : 1023,
    "pName" : "Floor rug",
    "pDescription" : "Hannd wovwn floor rugs with tassels",
    "pRating" : 4.9,
    "pCategory" :  "Furniture",
    "price" : 2920,
    "color" : "Red",
    "specification" : {"material":"Plastic", "usage":["office", "home"] },
	"dateFirstAvailable":ISODate("2012-09-17T00:00:00.000Z")
});

db.products.find({})

// Retrieve all the products that have a rating above 4.5.
db.products.find({"pRating": {$gt: 4.5}})

// Retrieve all products categorized as furniture with price less than 10000.
db.products.find({"pCategory": "Furniture", "price": {$lt: 10000}})

// Retrieve all products with price range between 1600 and 3500
db.products.find({"price": {$gte: 1600, $lte: 3500}})

// updating few documents

// update RAM and memory detailsof product 1001
db.products.updateOne({"_id": 1001},{$set:{"specification" : {"camera":"13MP", "memory":"64GB", "RAM":"4GB"}, "price": 10599}})
db.products.find({"_id": 1001})

// Remove sizes 4 and 5 from product 1007 specification field
db.products.updateOne({"_id": 1007},{$pull: { "specification.sizes": { $in: [ 4, 5 ] }}, $set: {"price": 2299}})
db.products.find({"_id": 1007})

// Update rating and price of product 1015
db.products.updateOne({"_id": 1015},{$set: {"price": 18999, "pRating": 4.9}})
db.products.find({"_id": 1015})

// Add sizes to product 1019 XL,XXl and XS
db.products.updateOne({"_id": 1019},{$push: {"specification.size": {$each: ["XL", "XXL", "XS"]}}})
db.products.find({"_id": 1019})

// Create an ascending index on the category field called p_category_asc.
db.products.createIndex(
    {"pCategory": 1},
    {name: "p_category_asc"}
)

// Create 2 new collections called ElectronicProducts and FurnitureCatalog, that contain only products from that respective category and the sum of all the respective product prices.
db.products.aggregate(
    {$match: {"pCategory": "Electronics"}}, 
    {$out: "ElectronicProducts"}
)

db.ElectronicProducts.find()

db.products.aggregate(
    {$match: {"pCategory": "Furniture"}}, 
    {$out: "FurnitureCatalog"}
)

db.FurnitureCatalog.find()

// Create a new collection called TopFive, that contains the first five products from the catalog when sorted by rating.
db.products.aggregate(
    {$sort: {"pRating": 1}}, 
    {$limit: 5},
    {$out: "TopFive"
)

db.TopFive.find()

// Create a new collection called BudgetBuys, that contains products that cost less than 9000.
db.products.aggregate(
    {$match: {"price": {$lt: 9000}}}, 
    {$out: "BudgetBuys"}
)

db.BudgetBuys.find()
