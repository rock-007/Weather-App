use weather;
db.dropDatabase();

db.favourites.insertMany([
    {
    name:"London"
    },
    {
      name:"Edinburgh"
    },
    {
      name:"Glasgow"
    }
  ]);