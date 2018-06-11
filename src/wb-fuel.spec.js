import Fuel from "./wb-fuel.js";
import { expect } from 'chai';
import {
  waitForCustomEvent,
  createSandbox,
  appendBeforeEach,
  removeAfterEach,
  changeInputValue
} from './testUtil';

describe("wb-fuel", () => {
  let sandbox = createSandbox();
  let fuel;
  const fuelArm = '31';

  before(() => {
    customElements.define('wb-fuel', Fuel);
    fuel = document.createElement("wb-fuel");
    fuel.setAttribute("fuelArm", fuelArm);
    sandbox.appendChild(fuel);
  });

  appendBeforeEach(sandbox);

  it("renders", async () => {
    expect(document.querySelectorAll("wb-fuel").length).to.equal(1);
    expect(fuel.textContent).to.contain(fuelArm);
  })

  it("emits a fuelAmountChanged event", async () => {
    const fuelAmountChanged = waitForCustomEvent(fuel, "fuelAmountChanged").then(({detail}) => {
      expect(detail.fuelAmount).to.equal("10");
    });
    const input = fuel.querySelector("input");
    changeInputValue(input, "10");
    await fuelAmountChanged;
    expect(fuel.textContent).to.contain("60");
    expect(fuel.textContent).to.contain(String(60 * 31));
  });

  removeAfterEach(sandbox);
})
