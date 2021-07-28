exports.seed = function (knex) {
  return knex("locations").insert([
    { location_name: "Burundi" },
    { location_name: "Kenya" },
    { location_name: "Rwanda" },
    { location_name: "South Sudan" },
    { location_name: "Tanzania" },
    { location_name: "Uganda" },
  ]);
};
