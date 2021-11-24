class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Rosales Nolasco Damián
      </p>`;
  }
}

customElements.define("mi-footer", MiFooter);
