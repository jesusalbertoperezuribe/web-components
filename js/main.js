class PlatoMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    if (this.shadowRoot.innerHTML !== '') return;

    const template = document.getElementById('plato-template');
    const contenidoClonado = template.content.cloneNode(true);
