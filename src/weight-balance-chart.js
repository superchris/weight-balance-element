import Plotly from 'plotly.js/dist/plotly-basic';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class WeightBalanceChart extends PolymerElement {

  static get properties() {
    return {
      cg: Number,
      weight: Number,
      cgLimits: Array
    }
  }

  static get observers() {
    return [
      '_redraw(weight, cg, cgLimits)'
    ]
  }


  _redraw(weight, cg, cgLimits) {
    const marker = {
      x: [this.cg],
      y: [this.weight],
      type: 'marker',
      marker: {
        symbol: "cross",
        size: 20
      }
    };
    const cgBounds = this.cgLimits.map(limit => limit.cg);
    const weightBounds = this.cgLimits.map(limit => limit.weight);
    this.bounds = {
      x: cgBounds,
      y: weightBounds,
      fill: 'tozeroy',
      type: 'scatter'
    };

    Plotly.react(this, [marker, this.bounds], this.layout);
  }

  ready() {

    this.layout = {
      height: 500,
      showlegend: false,
      width: 700,
      autosize: false,
      yaxis: {
        range: [1000, 1800]
      },
      xaxis: {
        range: [30, 37]
      }
    };

    Plotly.newPlot(this, [], this.layout);

  }
}

export default WeightBalanceChart;
