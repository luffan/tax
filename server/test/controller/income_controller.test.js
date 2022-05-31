import request from "supertest";
var app = require("../../index.js");

describe("Income controller tests", () => {
  afterAll(() => {
    app.server.connections = 0;

    app.server.close();
  });

  describe("Update /income", () => {
    test("should response with a 200 status code", async () => {
      const mockClient = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const newUser = await request(app.app).post("/api/income").send({
        sum: 100,
        year: 2022,
        client_id: mockClient.body.id,
      });

      const response = await request(app.app).put("/api/income").send({
        id: newUser.body.id,
        sum: 150,
        year: 2021,
        client_id: mockClient.body.id,
      });

      expect(response.statusCode).toBe(200);

      const req = "/api/income/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should be update by id", async () => {
      const mockClient = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const newUser = await request(app.app).post("/api/income").send({
        sum: 100,
        year: 2022,
        client_id: mockClient.body.id,
      });

      const response = await request(app.app).put("/api/income").send({
        id: newUser.body.id,
        sum: 150,
        year: 2021,
        client_id: mockClient.body.id,
      });

      expect(response.body).toBe(newUser.body.id);

      const req = "/api/income/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should not be update by id", async () => {
      const mockClient = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const newUser = await request(app.app).post("/api/income").send({
        sum: 100,
        year: 2022,
        client_id: mockClient.body.id,
      });

      const wrongReq = "/api/income/" + 1;
      const response = await request(app.app).put(wrongReq).send({
        id: newUser.body.id,
        sum: 150,
        year: 2021,
        client_id: mockClient.body.id,
      });

      expect(newUser.body.id).not.toBe(response.body.id);

      const req = "/api/income/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("GET /income", () => {
    test("should response with a 200 status code", async () => {
      const mockClient = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const newUser = await request(app.app).post("/api/income").send({
        sum: 100,
        year: 2022,
        client_id: mockClient.body.id,
      });

      const req = "/api/income/" + newUser.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.statusCode).toBe(200);

      await request(app.app).delete(req).send();
    });

    test("should be equal by id", async () => {
      const mockClient = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const newUser = await request(app.app).post("/api/income").send({
        sum: 100,
        year: 2022,
        client_id: mockClient.body.id,
      });

      const req = "/api/income/" + newUser.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.body).toEqual({
        id: newUser.body.id,
        sum: 100,
        year: 2022,
        client_id: mockClient.body.id,
      });

      await request(app.app).delete(req).send();
    });

    test("should not be equal by id", async () => {
      const mockClient = await request(app.app).post("/api/user").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        passport_id: "passprotId",
        login: "login",
        password: "password",
        district: "Minsk",
      });

      const newUser = await request(app.app).post("/api/income").send({
        sum: 100,
        year: 2022,
        client_id: mockClient.body.id,
      });

      const wrongReq = "/api/income/" + 1;
      const response = await request(app.app).get(wrongReq).send();

      expect(response.body).toEqual(
        expect.not.objectContaining({
          id: newUser.body.id,
          sum: 100,
          year: 2022,
          client_id: mockClient.body.id,
        })
      );

      const req = "/api/income/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("POST /income", () => {
    describe("Positive test(when user paseed all fields)", () => {
      test("should response with a 200 status code", async () => {
        const mockClient = await request(app.app).post("/api/user").send({
          name: "name",
          surname: "surname",
          middlename: "middlename",
          passport_id: "passprotId",
          login: "login",
          password: "password",
          district: "Minsk",
        });

        const response = await request(app.app).post("/api/income").send({
          sum: 100,
          year: 2022,
          client_id: mockClient.body.id,
        });

        expect(response.statusCode).toBe(200);

        const req = "/api/income/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should specify json as the content type in the http header", async () => {
        const mockClient = await request(app.app).post("/api/user").send({
          name: "name",
          surname: "surname",
          middlename: "middlename",
          passport_id: "passprotId",
          login: "login",
          password: "password",
          district: "Minsk",
        });

        const response = await request(app.app).post("/api/income").send({
          sum: 100,
          year: 2022,
          client_id: mockClient.body.id,
        });

        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );

        const req = "/api/income/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should contain a id in the response body", async () => {
        const mockClient = await request(app.app).post("/api/user").send({
          name: "name",
          surname: "surname",
          middlename: "middlename",
          passport_id: "passprotId",
          login: "login",
          password: "password",
          district: "Minsk",
        });

        const response = await request(app.app).post("/api/income").send({
          sum: 100,
          year: 2022,
          client_id: mockClient.body.id,
        });

        expect(response.body.id).toBeDefined();

        const req = "/api/income/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });
    });

    describe("Negative test(when the fields is empty)", () => {
      test("Should return a 403 satus code", async () => {
        const mockClient = await request(app.app).post("/api/user").send({
          name: "name",
          surname: "surname",
          middlename: "middlename",
          passport_id: "passprotId",
          login: "login",
          password: "password",
          district: "Minsk",
        });

        const bodies = [{ sum: 100 }, { year: 2022 }, { client_id: mockClient.body.id }];

        for (const body of bodies) {
          const response = await request(app.app)
            .post("/api/income")
            .send(body);

          expect(response.statusCode).toBe(500);
        }
      });
    });
  });
});
