class PlatoMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    if (this.shadowRoot.innerHTML !== '') return;

    const template = document.getElementById('plato-template');
    const contenidoClonado = template.content.cloneNode(true);

    const nombre = this.getAttribute('nombre') || 'Plato sin nombre';
    const precio = this.getAttribute('precio') || '$0';
    const disponibilidad = this.getAttribute('disponibilidad') || 'Disponible';

    contenidoClonado.getElementById('nombre-plato').textContent = nombre;
    contenidoClonado.getElementById('precio-plato').textContent = precio;

    const badgeEstado = contenidoClonado.getElementById('estado-plato');
    badgeEstado.textContent = disponibilidad;

    if (disponibilidad.toLowerCase() === 'disponible') {
      badgeEstado.classList.add('disponible');
    } else {
      badgeEstado.classList.add('agotado');
    }

    this.shadowRoot.appendChild(contenidoClonado);
  }
}

customElements.define('plato-menu', PlatoMenu);