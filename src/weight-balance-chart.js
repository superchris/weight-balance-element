import Plotly from 'plotly.js/dist/plotly-basic';

class WeightBalanceChart extends HTMLElement {

  static get observedAttributes() {
    return [
      'total-weight', 'cg', 'cg-limits'
    ]
  }

  get totalWeight() {
    return parseFloat(this.getAttribute('total-weight'));
  }

  get cgLimits() {
    return JSON.parse(this.getAttribute('cg-limits'));
  }

  get cg() {
    return parseFloat(this.getAttribute('cg'));
  }

  attributeChangedCallback() {
    this._redraw();
  }

  _redraw() {
    const marker = {
      x: [this.cg],
      y: [this.totalWeight],
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

  connectedCallback() {

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
    this._redraw();
  }
}

export default WeightBalanceChart;
