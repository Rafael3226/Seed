//Descargar un dataset de airbnb y realizar las siguientes consultas:

//    Alojamiento más barato 
db.listings.find({},{"price": true, "name": true}).limit(1).pretty().sort({"price":1});
//    Alojamiento con precio más alto
db.listings.find({},{"price": true, "name": true}).limit(1).pretty().sort({"price": -1});
//    Alojamiento con la mejor calificación en el puntaje de los comentarios (reviews) 
db.listings.find({},{"review_scores_rating": true, "name": true}).limit(1).pretty().sort({"review_scores_rating": -1});
//    Alojamiento con depósito de seguridad y tarifa de limpieza más baratos (menor x, con x=depósito de seguridad + tarifa de limpieza) 

//    Alojamientos que cuenten con microondas, TV y precio menor a $500 
db.acomodaciones.find({$and: [{amenities: /TV/}, {amenities: /Microwave/}, {price: {$lt: "$500"} }]});
//    Media de precios de todos los alojamientos que cuenten con microondas 
db.listings.aggregate([{ $match: {}, {$group: {} } }]);
//    Alojamientos con menor cantidad de noches mínimas, cantidad máxima de noches mayor a 15, que cuenten con TV y costo menor a $200
db.acomodaciones.find({$and: [{maximum_nights: {$gt: "15"}}, {amenities: /TV/}, {price: {$lt: "$200"}}]}).sort({minimum_nights: 1}) ;
