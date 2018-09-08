class WeightBalance extends HTMLElement {

  get basicEmptyWeight() {
    return this.getAttribute("basic-empty-weight");
  }

  get basicEmptyArm() {
    return this.getAttribute("basic-empty-arm");
  }

  get fuelArm() {
    return this.getAttribute("fuel-arm");
  }

  get stations() {
    return this.getAttribute("stations");
  }

  get cgLimits() {
    return this.getAttribute("cg-limits");
  }

  connectedCallback() {
    this.innerHTML = `
    <weight-balance-form
      basic-empty-weight='${this.basicEmptyWeight}'
      basic-empty-arm='${this.basicEmptyArm}'
      stations='${this.stations}'
      fuel-arm='${this.fuelArm}'></weight-balance-form>
    <weight-balance-chart cg-limits='${this.cgLimits}'></weight-balance-chart>

    `;
    this.addEventListener("weightBalance", ({detail: { cg, totalWeight }}) => { 
      const wbChart = this.querySelector('weight-balance-chart');
      wbChart.setAttribute('cg', cg);
      wbChart.setAttribute('total-weight', totalWeight);
    });
  }
  
}

export default WeightBalance;
