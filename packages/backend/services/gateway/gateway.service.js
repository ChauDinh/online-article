const ApiGateway = require("moleculer-web");
const { SERVICE_USER } = require("../../constants");

module.exports = {
  mixins: [ApiGateway],
  settings: {
    routes: [
      /**
       * API routes
       */
      {
        port: 3000,
        path: "/api",
        authentication: false,
        autoAliases: false,
        aliases: {
          "GET /sum": `${SERVICE_USER}.sum`,
        },
        bodyParsers: {
          json: { limit: "2MB" },
          urlencoded: { extended: true, limit: "2MB" },
        },
      },
    ],
  },
};
