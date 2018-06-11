import WeightBalance from "./weight-balance.js";
import { expect } from 'chai';

describe("basic test", () => {
  let sandbox;

  before(() => {
    sandbox = document.createElement("div", {id: "sandbox"});
    customElements.define('weight-balance', WeightBalance);
  });

  beforeEach(() => {
    document.body.appendChild(sandbox);
  });

  it("renders", () => {
    const weightBalance = document.createElement("weight-balance");
    sandbox.appendChild(weightBalance);
    expect(document.querySelectorAll("weight-balance").length).to.equal(1);
    // expect(helloWorld.textContent).to.equal("Hello, not world!");
  })

  afterEach(() => {
    document.body.removeChild(sandbox);
  });
})
