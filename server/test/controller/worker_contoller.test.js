import request from "supertest";
var app = require("../../index.js");

describe("Worker controller tests", () => {
  afterAll(() => {
    app.server.connections = 0;
    
    app.server.close();
  });

  describe("Update /worker", () => {
    test("should response with a 200 status code", async () => {
      const newWorker = await request(app.app).post("/api/worker").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        login: "login",
        password: "password",
      });

      const response = await request(app.app).put("/api/worker").send({
        id: newWorker.body.id,
        name: "name1",
        surname: "surname1",
        middlename: "middlename1",
        login: "login1",
        password: "password1",
      });

      expect(response.statusCode).toBe(200);

      const req = "/api/worker/" + newWorker.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should be update by id", async () => {
      const newWorker = await request(app.app).post("/api/worker").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        login: "login",
        password: "password",
      });

      const response = await request(app.app).put("/api/worker").send({
        id: newWorker.body.id,
        name: "name1",
        surname: "surname1",
        middlename: "middlename1",
        login: "login1",
        password: "password1",
      });

      expect(response.body).toBe(newWorker.body.id);

      const req = "/api/worker/" + newWorker.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should not be update by id", async () => {
      const newWorker = await request(app.app).post("/api/worker").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        login: "login",
        password: "password",
      });

      const wrongReq = "/api/worker/" + 1;
      const response = await request(app.app).put(wrongReq).send({
        id: newWorker.body.id,
        name: "name1",
        surname: "surname1",
        middlename: "middlename1",
        login: "login1",
        password: "password1",
      });

      expect(newWorker.body.id).not.toBe(response.body.id);

      const req = "/api/worker/" + newWorker.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("GET /worker", () => {
    test("should response with a 200 status code", async () => {
      const newWorker = await request(app.app).post("/api/worker").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        login: "login",
        password: "password",
      });

      const req = "/api/worker/" + newWorker.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.statusCode).toBe(200);

      await request(app.app).delete(req).send();
    });

    test("should be equal by id", async () => {
      const newWorker = await request(app.app).post("/api/worker").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        login: "login",
        password: "password",
      });

      const req = "/api/worker/" + newWorker.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.body).toEqual({
        id: newWorker.body.id,
        name: "name",
        surname: "surname",
        middlename: "middlename",
        login: "login",
        password: "password",
      });

      await request(app.app).delete(req).send();
    });

    test("should not be equal by id", async () => {
      const newWorker = await request(app.app).post("/api/worker").send({
        name: "name",
        surname: "surname",
        middlename: "middlename",
        login: "login",
        password: "password",
      });

      const wrongReq = "/api/worker/" + 1;
      const response = await request(app.app).get(wrongReq).send();

      expect(response.body).toEqual(
        expect.not.objectContaining({
          id: newWorker.body.id,
          name: "name",
          surname: "surname",
          middlename: "middlename",
          login: "login",
          password: "password",
        })
      );

      const req = "/api/worker/" + newWorker.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("POST /worker", () => {
    describe("Positive test(when user paseed all fields)", () => {
      test("should response with a 200 status code", async () => {
        const response = await request(app.app).post("/api/worker").send({
          name: "name",
          surname: "surname",
          middlename: "middlename",
          login: "login",
          password: "password",
        });

        expect(response.statusCode).toBe(200);

        const req = "/api/worker/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should specify json as the content type in the http header", async () => {
        const response = await request(app.app).post("/api/worker").send({
          name: "name",
          surname: "surname",
          middlename: "middlename",
          login: "login",
          password: "password",
        });

        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );

        const req = "/api/worker/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should contain a id in the response body", async () => {
        const response = await request(app.app).post("/api/worker").send({
          name: "name",
          surname: "surname",
          middlename: "middlename",
          login: "login",
          password: "password",
        });

        expect(response.body.id).toBeDefined();

        const req = "/api/worker/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });
    });

    describe("Negative test(when the fields is empty)", () => {
      test("Should return a 403 satus code", async () => {
        const bodies = [
          { name: "name" },
          { surname: "surname" },
          { middlename: "middlename" },
          { login: "login" },
          { password: "password" },
        ];

        for (const body of bodies) {
          const response = await request(app.app).post("/api/worker").send(body);

          expect(response.statusCode).toBe(500);
        }
      });
    });
  });
});
