class PlatoMenu extends HTMLElement {
  constructor() {
    super();
    
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.getElementById('plato-template');
    const contenidoClonado = template.content.cloneNode(true);

    