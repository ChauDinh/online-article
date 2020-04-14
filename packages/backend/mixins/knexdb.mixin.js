const { KnexDbMixin } = require("moleculer-db-knex");
const { getKnexConfig } = require("../utils/db.util");

exports.DbMixin = (options) => {
  const { schema, table, idField } = options || {
    schema: "public",
    idField: "id",
  };

  if (!table) {
    throw Error("Table is required but not mentioned in options!");
  }

  const configs = getKnexConfig();

  return KnexDbMixin({
    idField,
    schema,
    table,
    knex: {
      configs,
    },
  });
};
