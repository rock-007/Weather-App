use weather;
db.dropDatabase();

db.favourites.insertMany([
    {
    name:"london"
    },
    {
      name:"edinburgh"
    },
    {
      name:"glasgow"
    }
  ]);