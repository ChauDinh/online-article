exports.up = function (knex) {
  return knex.schema.raw("CREATE SCHEMA IF NOT EXISTS usr;"); // user schema
};

exports.down = function (knex) {
  return knex.schema;
};
