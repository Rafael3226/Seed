const { Seeder } = require('mongo-seeding');
const config = {
    database: {
      host: '127.0.0.1',
      port: 27017,
      name: 'airbnb',
    },
    dropDatabase: true,
  };
const seeder = new Seeder(config);
const path = require('path');
const collections = seeder.readCollectionsFromPath(path.resolve("./data"));
console.log(collections);

seeder
  .import(collections)
  .then(() => {
    console.log("Seed exitoso");
  })
  .catch(err => {
    console.log(err);
  });
