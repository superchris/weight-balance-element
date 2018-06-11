import { LitElement, html} from '@polymer/lit-element';
import computeMoment from './computeMoment.js';

class FuelElement extends LitElement {

  static get properties() {
    return {
      fuelWeight: {
        type: Number
      },
      fuelArm: Number
    };
  }

  _createRoot() { return this; }

  _render({ fuelWeight, fuelArm }) {
    return html`
      <tr>
        <td>
          <input name="fuelAmount" on-change="${(e) => this.fuelAmountChanged(e)}"/>
          * 6 = ${fuelWeight}
        </td>
        <td>${fuelArm}</td>
        <td>${computeMoment(fuelArm, fuelWeight)}</td>
      </tr>
    `;
  }

  fuelAmountChanged(e) {
    this.fuelWeight = 6 * Number(e.target.value);
    this.dispatchEvent(new CustomEvent("fuelAmountChanged", { bubbles: true, detail: { fuelAmount: e.target.value }}));
  }
}

export default FuelElement;
