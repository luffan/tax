import request from "supertest";
var app = require("../../index.js");

describe("Tax controller tests", () => {
  afterAll(() => {
    app.server.connections = 0;

    app.server.close();
  });

  describe("Update /tax", () => {
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

      const mockPayment = await request(app.app).post("/api/payment").send({
        date: "2021-04-12",
        amount: 500,
      });

      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      const response = await request(app.app).put("/api/tax").send({
        id: newTax.body.id,
        cost: 400,
        expiration_date: "2021-03-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      expect(response.statusCode).toBe(200);

      const req = "/api/tax/" + newTax.body.id.toString();
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

      const mockPayment = await request(app.app).post("/api/payment").send({
        date: "2021-04-12",
        amount: 500,
      });

      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      const response = await request(app.app).put("/api/tax").send({
        id: newTax.body.id,
        cost: 400,
        expiration_date: "2022-04-29",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      expect(response.body).toBe(newTax.body.id);

      const req = "/api/tax/" + newTax.body.id.toString();
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

      const mockPayment = await request(app.app).post("/api/payment").send({
        date: "2021-04-12",
        amount: 500,
      });

      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      const wrongReq = "/api/tax/" + 1;
      const response = await request(app.app).put(wrongReq).send({
        id: newTax.body.id,
        cost: 400,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      expect(newTax.body.id).not.toBe(response.body.id);

      const req = "/api/tax/" + newTax.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("GET /tax", () => {
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

      const mockPayment = await request(app.app).post("/api/payment").send({
        date: "2021-04-12",
        amount: 500,
      });

      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      const req = "/api/tax/" + newTax.body.id.toString();
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

      const mockPayment = await request(app.app).post("/api/payment").send({
        date: "2021-04-12",
        amount: 500,
      });

      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      const req = "/api/tax/" + newTax.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.body).toEqual({
        id: newTax.body.id,
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
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

      const mockPayment = await request(app.app).post("/api/payment").send({
        date: "2021-04-12",
        amount: 500,
      });

      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: mockClient.body.id,
        payment_id: mockPayment.body.id,
      });

      const wrongReq = "/api/tax/" + 1;
      const response = await request(app.app).get(wrongReq).send();

      expect(response.body).toEqual(
        expect.not.objectContaining({
          id: newTax.body.id,
          cost: 500,
          expiration_date: "2021-04-12",
          client_id: mockClient.body.id,
          payment_id: mockPayment.body.id,
        })
      );

      const req = "/api/tax/" + newTax.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("POST /tax", () => {
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

        const mockPayment = await request(app.app).post("/api/payment").send({
          date: "2021-04-12",
          amount: 500,
        });

        const response = await request(app.app).post("/api/tax").send({
          cost: 500,
          expiration_date: "2021-04-12",
          client_id: mockClient.body.id,
          payment_id: mockPayment.body.id,
        });

        expect(response.statusCode).toBe(200);

        const req = "/api/tax/" + response.body.id.toString();
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

        const mockPayment = await request(app.app).post("/api/payment").send({
          date: "2021-04-12",
          amount: 500,
        });

        const response = await request(app.app).post("/api/tax").send({
          cost: 500,
          expiration_date: "2021-04-12",
          client_id: mockClient.body.id,
          payment_id: mockPayment.body.id,
        });

        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );

        const req = "/api/tax/" + response.body.id.toString();
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

        const mockPayment = await request(app.app).post("/api/payment").send({
          date: "2021-04-12",
          amount: 500,
        });

        const response = await request(app.app).post("/api/tax").send({
          cost: 500,
          expiration_date: "2021-04-12",
          client_id: mockClient.body.id,
          payment_id: mockPayment.body.id,
        });

        expect(response.body.id).toBeDefined();

        const req = "/api/tax/" + response.body.id.toString();
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

        const mockPayment = await request(app.app).post("/api/payment").send({
          date: "2021-04-12",
          amount: 500,
        });

        const bodies = [
          { cost: 500 },
          { expiration_date: "2021-04-12" },
          { client_id: mockClient.body.id },
          { payment_id: mockPayment.body.id },
        ];

        for (const body of bodies) {
          const response = await request(app.app).post("/api/tax").send(body);

          expect(response.statusCode).toBe(500);
        }
      });
    });
  });
});
