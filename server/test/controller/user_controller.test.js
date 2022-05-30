import request from "supertest";
// import app from "../../index.js"
var app = require("../../index.js");

describe("GET /user", () => {
  describe("ABC", () => {
    test("should be equal", async () => {
      const newUser = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const response = await request(app.app).get("api/user/id").send(newUser.body.id);

      expect(response.body).toEqual({
        id: newId,
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });
    });
  });
});

describe("POST /user", () => {
  describe("Positive test(when user paseed all fields)", () => {
    test("should response with a 200 status code", async () => {
      const response = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      expect(response.statusCode).toBe(200);
    });

    test("should specify json as the content type in the http header", async () => {
      const response = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    test("should contain a id in the response body", async () => {
      const response = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      expect(response.body.id).toBeDefined();
    });
  });

  describe("when the fields is empty", () => {
    test("Should return a 403 satus code", async () => {
      const bodies = [
        { name: "name" },
        { surname: "surname" },
        { middlename: "middlename" },
        { passport_id: "passprot_id" },
        { login: "login" },
        { password: "password" },
        { district: "ditrict" },
      ];

      for (const body of bodies) {
        const response = await request(app.app).post("api/users").send(body);
        expect(response.statusCode).toBe(403);
      }
    });
  });

  afterAll(() => {
    app.server.close();
  });
});
