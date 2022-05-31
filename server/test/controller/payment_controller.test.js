import request from "supertest";
var app = require("../../index.js");

describe("Payment controller tests", () => {
  afterAll(() => {
    app.server.close();
  });

  describe("Update /payment", () => {
    test("should response with a 200 status code", async () => {
      const newPayment = await request(app.app).post("/api/payment").send({
        date: "2022-31-05",
        amount: 500,
      });

      const response = await request(app.app).put("/api/payment").send({
        id: newPayment.body.id,
        date: "2022-30-05",
        amount: 400,
      });

      expect(response.statusCode).toBe(200);

      const req = "/api/payment/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should be update by id", async () => {
      const newUser = await request(app.app).post("/api/payment").send({
        date: "2022-31-05",
        amount: 500,
      });

      const response = await request(app.app).put("/api/payment").send({
        id: newUser.body.id,
        date: "2022-30-05",
        amount: 400,
      });

      expect(response.body).toBe(newUser.body.id);

      const req = "/api/payment/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });

    test("should not be update by id", async () => {
      const newUser = await request(app.app).post("/api/payment").send({
        date: "2022-31-05",
        amount: 500,
      });

      const wrongReq = "/api/payment/" + 1;
      const response = await request(app.app).put(wrongReq).send({
        id: newUser.body.id,
        date: "2022-30-05",
        amount: 400,
      });

      expect(newUser.body.id).not.toBe(response.body.id);

      const req = "/api/payment/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("GET /payment", () => {
    test("should response with a 200 status code", async () => {
      const newUser = await request(app.app).post("/api/payment").send({
        date: "2022-31-05",
        amount: 500,
      });

      const req = "/api/payment/" + newUser.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.statusCode).toBe(200);

      await request(app.app).delete(req).send();
    });

    test("should be equal by id", async () => {
      const newUser = await request(app.app).post("/api/payment").send({
        date: "2022-31-05",
        amount: 500,
      });

      const req = "/api/payment/" + newUser.body.id.toString();
      const response = await request(app.app).get(req).send();

      expect(response.body).toEqual({
        id: newUser.body.id,
        date: "2022-31-05",
        amount: 500,
      });

      await request(app.app).delete(req).send();
    });

    test("should not be equal by id", async () => {
      const newUser = await request(app.app).post("/api/payment").send({
        date: "2022-31-05",
        amount: 500,
      });

      const wrongReq = "/api/payment/" + 1;
      const response = await request(app.app).get(wrongReq).send();

      expect(response.body).toEqual(
        expect.not.objectContaining({
          id: newUser.body.id,
          date: "2022-31-05",
          amount: 500,
        })
      );

      const req = "/api/payment/" + newUser.body.id.toString();
      await request(app.app).delete(req).send();
    });
  });

  describe("POST /payment", () => {
    describe("Positive test(when user paseed all fields)", () => {
      test("should response with a 200 status code", async () => {
        const response = await request(app.app).post("/api/payment").send({
          date: "2022-31-05",
          amount: 500,
        });

        expect(response.statusCode).toBe(200);

        const req = "/api/payment/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should specify json as the content type in the http header", async () => {
        const response = await request(app.app).post("/api/payment").send({
          date: "2022-31-05",
          amount: 500,
        });

        expect(response.headers["content-type"]).toEqual(
          expect.stringContaining("json")
        );

        const req = "/api/payment/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });

      test("should contain a id in the response body", async () => {
        const response = await request(app.app).post("/api/payment").send({
          date: "2022-31-05",
          amount: 500,
        });

        expect(response.body.id).toBeDefined();

        const req = "/api/payment/" + response.body.id.toString();
        await request(app.app).delete(req).send();
      });
    });

    describe("Negative test(when the fields is empty)", () => {
      test("Should return a 403 satus code", async () => {
        const bodies = [{ date: "2022-31-05" }, { amount: 500 }];

        for (const body of bodies) {
          const response = await request(app.app)
            .post("/api/payment")
            .send(body);

          expect(response.statusCode).toBe(500);
        }
      });
    });
  });
});
