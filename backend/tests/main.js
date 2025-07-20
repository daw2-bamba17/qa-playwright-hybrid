import { request } from "@playwright/test";
import { expect } from "chai";
import { API_URL } from "../fixtures/apiData.js";

describe("PokeAPI Pikachu fetch", function () {
  let apiContext;
  let res;
  let data;

  before(async () => {
    try {
      apiContext = await request.newContext();
      res = await apiContext.fetch(`${API_URL}`);
      data = await res.json();

      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch (err) {
      throw err;
    }
  });

  it("should return a successful response", () => {
    expect(res.ok()).to.be.true;
  });

  it("should have moves", () => {
    expect(data.moves).to.be.an("array").that.is.not.empty;
    console.log(`Number of moves: ${data.moves.length}`);
  });

  it("should have type electric", () => {
    const types = data.types.map((t) => t.type.name);
    console.log(`Types: ${types.join(", ")}`);
    expect(types).to.include("electric");
  });
});
