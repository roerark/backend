exports.seed = function (knex) {
  return knex("items").insert([
    {
      name: "eggs",
      description: "Local, cage-free fresh farm eggs sold by the dozen.",
      photo_url:
        "https://images.unsplash.com/photo-1509479100390-f83a8349e79c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",

      price: 2.75,
      user_id: 1,
      location_id: 1,
    },
    {
      name: "Exotic Eggs",
      description:
        "Local, cage-free fresh farm Exotic Eggs sold by the half dozen.",
      photo_url:
        "https://images.unsplash.com/photo-1569127959161-2b1297b2d9a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

      price: 3.75,
      user_id: 2,
      location_id: 1,
    },
    {
      name: "Milk",
      description: "Local, unpasteurized milk sold by the gallon.",
      photo_url:
        "https://images.unsplash.com/photo-1565504052130-29d2211abd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",

      price: 2.25,
      user_id: 3,
      location_id: 1,
    },
  ]);
};
