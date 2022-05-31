import request from "supertest";
var app = require("../../index.js");

describe("Tax controller tests", () => {
  afterAll(() => {
    app.server.close();
  });

  describe("Update /tax", () => {
    test("should response with a 200 status code", async () => {
      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
      });

      const response = await request(app.app).put("/api/tax").send({
        id: newTax.body.id,
        cost: 400,
        expiration_date: "2021-04-12",
        client_id: 174,
        payment_id: 4,
      });

      expect(response.statusCode).toBe(200);

      const req = "/api/tax/" + newTax.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should be update by id", async () => {
      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
      });

      const response = await request(app.app).put("/api/tax").send({
        id: newTax.body.id,
        cost: 400,
        expiration_date: "2022-04-31",
        client_id: 174,
        payment_id: 4,
      });

      expect(response.body).toBe(newTax.body.id);

      const req = "/api/tax/" + newTax.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should not be update by id", async () => {
      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
      });

      const wrongReq = "/api/tax/" + 1;
      const response = await request(app.app).put(wrongReq).send({
        id: newTax.body.id,
        cost: 400,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 4,
      });

      expect(newTax.body.id).not.toBe(response.body.id);

      const req = "/api/tax/" + newTax.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("GET /tax", () => {
    test("should response with a 200 status code", async () => {
      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
      });

      const req = "/api/tax/" + newTax.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.statusCode).toBe(200);

      await request(app.app).delete(req).send();
    });

    test("should be equal by id", async () => {
      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
      });

      const req = "/api/tax/" + newTax.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.body).toEqual({
        id: newTax.body.id,
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
      });

      await request(app.app).delete(req).send();
    });

    test("should not be equal by id", async () => {
      const newTax = await request(app.app).post("/api/tax").send({
        cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
      });

      const wrongReq = "/api/tax/" + 1;
      const response = await request(app.app).get(wrongReq).send();

      expect(response.body).toEqual(
        expect.not.objectContaining({
          id: newTax.body.id,
          cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
        })
      );

      const req = "/api/tax/" + newTax.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("POST /tax", () => {
    describe("Positive test(when user paseed all fields)", () => {
      test("should response with a 200 status code", async () => {
        const response = await request(app.app).post("/api/tax").send({
          cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
        });

        expect(response.statusCode).toBe(200);

        const req = "/api/tax/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should specify json as the content type in the http header", async () => {
        const response = await request(app.app).post("/api/tax").send({
          cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
        });

        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );

        const req = "/api/tax/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should contain a id in the response body", async () => {
        const response = await request(app.app).post("/api/tax").send({
          cost: 500,
        expiration_date: "2021-04-12",
        client_id: 173,
        payment_id: 3,
        });

        expect(response.body.id).toBeDefined();

        const req = "/api/tax/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });
    });

    describe("Negative test(when the fields is empty)", () => {
      test("Should return a 403 satus code", async () => {
        const bodies = [
          { cost: 500 },
          { expiration_date: "2021-04-12" },
          { client_id: 173 },
          { payment_id: 4 },
        ];

        for (const body of bodies) {
          const response = await request(app.app).post("/api/tax").send(body);

          expect(response.statusCode).toBe(500);
        }
      });
    });
  });
});
