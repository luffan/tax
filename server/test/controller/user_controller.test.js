import request from "supertest";
// import app from "../../index.js"
var app = require("../../index.js");

describe("User controller tests", () => {
  afterAll(() => {
    app.server.close();
  });

  describe("Update /user", () => {
    test("should response with a 200 status code", async () => {
      const newUser = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const response = await request(app.app).put("/api/user").send({
        id: newUser.body.id,
        name: "name1",
        surname: "surname1",
        middlename: "middlename1",
        passport_id: "passprotId1",
        login: "login1",
        password: "password1",
        district: "Minsk1",
      });

      expect(response.statusCode).toBe(200);

      const req = "/api/user/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should be update by id", async () => {
      const newUser = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const response = await request(app.app).put("/api/user").send({
        id: newUser.body.id,
        name: "name1",
        surname: "surname1",
        middlename: "middlename1",
        passport_id: "passprotId1",
        login: "login1",
        password: "password1",
        district: "Minsk1",
      });

      expect(response.body).toBe(newUser.body.id);

      const req = "/api/user/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should not be update by id", async () => {
      const newUser = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const wrongReq = "/api/user/" + 1;
      const response = await request(app.app).put(wrongReq).send({
        id: newUser.body.id,
        name: "name1",
        surname: "surname1",
        middlename: "middlename1",
        passport_id: "passprotId1",
        login: "login1",
        password: "password1",
        district: "Minsk1",
      });

      expect(newUser.body.id).not.toBe(response.body.id);

      const req = "/api/user/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("GET /user", () => {
    test("should response with a 200 status code", async () => {
      const newUser = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const req = "/api/user/" + newUser.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.statusCode).toBe(200);

      await request(app.app).delete(req).send();
    });

    test("should be equal by id", async () => {
      const newUser = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const req = "/api/user/" + newUser.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.body).toEqual({
        id: newUser.body.id,
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      await request(app.app).delete(req).send();
    });

    test("should not be equal by id", async () => {
      const newUser = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const wrongReq = "/api/user/" + 1;
      const response = await request(app.app).get(wrongReq).send();

      expect(response.body).toEqual(
        expect.not.objectContaining({
          id: newUser.body.id,
          name: "name",
          surname: "surname",
          middlename: "middlename",
          passport_id: "passprotId",
          login: "login",
          password: "password",
          district: "Minsk",
        })
      );

      const req = "/api/user/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
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

        const req = "/api/user/" + response.body.id.toString();
        await request(app.app).delete(req).send();
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

        const req = "/api/user/" + response.body.id.toString();
        await request(app.app).delete(req).send();
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

        const req = "/api/user/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });
    });

    describe("Negative test(when the fields is empty)", () => {
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
          const response = await request(app.app).post("/api/user").send(body);

          expect(response.statusCode).toBe(500);
        }
      });
    });
  });
});

