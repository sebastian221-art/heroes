class HeroDetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          max-width: 500px;
          width: 100%;
        }
        button {
          background: red;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
      </style>
      <div class="modal-content">
        <h2 id="modal-name"></h2>
        <p id="modal-description"></p>
        <button id="close-btn">Cerrar</button>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#close-btn').addEventListener('click', () => {
      this.style.display = 'none';
    });
  }

  show(name, description) {
    this.shadowRoot.querySelector('#modal-name').textContent = name;
    this.shadowRoot.querySelector('#modal-description').textContent = description;
    this.style.display = 'flex';
  }
}

customElements.define('hero-detail', HeroDetail);
