export function waitForCustomEvent(elem, customEvent) {
  return new Promise((resolve, reject) => {
    elem.addEventListener(customEvent, (event) => {
      resolve(event);
    });
  });

}

export function appendBeforeEach(sandbox) {
  beforeEach(() => {
    document.body.appendChild(sandbox);
  });
}

export function removeAfterEach(sandbox) {
  afterEach(() => {
    document.body.removeChild(sandbox);
  });
}

export function createSandbox() {
  return document.createElement("div", {id: "sandbox"});
}

export function changeInputValue(input, value) {
  input.value = value;
  var event = new Event('change');
  input.dispatchEvent(event);
}
