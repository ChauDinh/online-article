const getDbConnection = () => {
  const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,
  } = process.env;

  return {
    host: DATABASE_HOST,
    port: +DATABASE_PORT,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
  };
};

exports.getKnexConfig = () => {
  const connection = getDbConnection();
  const { DATABASE_POOL_MIN: min, DATABASE_POOL_MAX: max } = process.env;
  console.log("Database pool min", min);
  return {
    client: "postgresql",
    connection,
    pool: {
      min: +min,
      max: +max,
    },
  };
};
