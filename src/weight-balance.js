import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class WeightBalance extends PolymerElement {

  static get properties() {
    return {
      stations: {
        type: Array
      },
      basicEmptyWeight: {
        type: Number
      },
      basicEmptyArm: {
        type: Number
      },
      fuelArm: {
        type: Number
      },
      cg: {
        type: Number
      },
      totalWeight: Number,
      cgLimits: Array
    }
  }

  static get template() {
    return html`
      <weight-balance-form
        basic-empty-weight={{basicEmptyWeight}}
        basic-empty-arm={{basicEmptyArm}}
        stations={{stations}}
        cg={{cg}}
        cg-limits={{cgLimits}}
        total-weight={{totalWeight}}
        fuel-arm={{fuelArm}}></weight-balance-form>
      <weight-balance-chart weight={{totalWeight}} cg={{cg}} cg-limits={{cgLimits}}></weight-balance-chart>

      CG: {{cg}} Total weight: {{totalWeight}}
    `;
  }
}

export default WeightBalance;
