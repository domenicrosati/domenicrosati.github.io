class ImportHTML extends HTMLElement {
  constructor() {
    self = super();
    const registerEvent = new CustomEvent("register", {
      detail: {
        name: this.getAttribute("name"),
        id: this.getAttribute("id")
      },
      bubbles: true,
      cancelable: false,
      composed: true
    });
    const src = this.getAttribute("src");
    fetch(src)
      .then(data => data.text())
      .then(html => {
        this.dispatchEvent(registerEvent);
        this.outerHTML = html;
      });
  }
}
customElements.define("html-import", ImportHTML);
