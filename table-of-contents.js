class TableOfContents extends HTMLElement {
  constructor() {
    self = super();
    const list = document.createElement("OL");
    list.setAttribute("id", "table-of-contents");
    this.innerHTML = list.outerHTML;
  }
  connectedCallback() {
    const listref = document.querySelector("ol#table-of-contents");
    document.addEventListener("register", payload => {
      if (payload.detail.name) {
        const item = document.createElement("LI");
        item.innerHTML =
          "<a href=#" + payload.detail.id + ">" + payload.detail.name + "</a>";
        listref.appendChild(item);
      }
    });
  }
}
customElements.define("table-of-contents", TableOfContents);
