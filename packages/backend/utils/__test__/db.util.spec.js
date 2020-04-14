const { getKnexConfig } = require("../db.util");

describe("db.util", () => {
  it("Should return correct configuration", () => {
    const configs = getKnexConfig();
    expect(configs).toEqual({
      client: "postgresql",
      connection: expect.any(Object),
      pool: {
        min: expect.any(Number),
        max: expect.any(Number),
      },
    });
  });
});
