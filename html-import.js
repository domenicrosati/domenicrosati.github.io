class ImportHTML extends HTMLElement {
  constructor() {
    self = super();
    const registerEvent = new CustomEvent("register", {
      detail: {
        id: this.getAttribute("id")
      },
      bubbles: true
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
