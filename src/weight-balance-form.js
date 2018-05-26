import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-input';

class WeightBalanceFormElement extends PolymerElement {

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
      fuelAmount: {
        type: Number
      },
      cg: {
        type: Number,
        notify: true
      },
      totalWeight: {
        type: Number,
        notify: true
      }
    }
  }
  static get observers() {
    return [
      '_stationsChanged(stations.*)',
      '_fuelAmountChanged(fuelAmount)'
    ]
  }
  static get template() {
    return html`
    <style>
    </style>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Arm</th>
          <th>Moment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic Empty Weight</td>
          <td>{{basicEmptyWeight}}</td>
          <td>{{basicEmptyArm}}</td>
          <td>[[_computeMoment(basicEmptyArm, basicEmptyWeight)]]</td>
        </tr>
        <tr>
          <td>Fuel</td>
          <td><iron-input bind-value="{{fuelAmount}}"><input /></iron-input> * 6 lb/gal = {{fuelWeight}}</td>
          <td>{{fuelArm}}</td>
          <td>{{fuelMoment}}</td>
        </tr>
        <template is="dom-repeat" items="{{stations}}">
          <tr>
            <td>[[item.name]]</td>
            <td><iron-input bind-value="{{item.weight}}"><input /></iron-input></td>
            <td>[[item.arm]]</td>
            <td>[[_computeMoment(item.arm, item.weight)]]</td>
          </tr>
        </template>
        <tr>
          <td></td>
          <td>[[totalWeight]]</td>
          <td></td>
          <td>[[totalMoment]]</td>
        </tr>
        <tr>
          <td colspan=4>CG: {{cg}}
        </tr>
      </tbody>
    </table>
    `;
  }
  _computeMoment(arm, weight) {
    return arm * (weight || 0);
  }
  _fuelAmountChanged(stuff) {
    this.fuelWeight = Number(this.fuelAmount) * 6;
    this.fuelMoment = this.fuelWeight * this.fuelArm;
  }
  _stationsChanged(stuff) {
    this.initialMoment = this.basicEmptyArm * this.basicEmptyWeight;
    this.totalMoment = this.stations.reduce((totalMoment, station) => {
      return totalMoment + station.arm * (station.weight || 0);
    }, (this.fuelMoment + this.initialMoment));
    this.totalWeight = this.stations.reduce((total, station) => {
      return total + (Number(station.weight) || 0);
    }, this.fuelWeight + this.basicEmptyWeight);
    this.cg = this.totalMoment / this.totalWeight;
  }
}
export default WeightBalanceFormElement
