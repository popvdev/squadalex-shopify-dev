if (!customElements.get('product-color-swatch')) {
  customElements.define(
    'product-color-swatch',
    class ProductColorSwatch extends HTMLElement {
      constructor() {
        super();
        this.labels = this.querySelectorAll('label');
      }

      connectedCallback() {
        this.labels.forEach(label => {
          label.addEventListener('click', this.onClick.bind(this));
        });
      }

      onClick(e) {
        const label = e.target;
        const color = label.dataset.colorValue;
        const item = label.closest('.product-list__item');
        item.querySelectorAll('img').forEach(img => {
          if (img.dataset.color == color) img.classList.remove('hidden');
          else img.classList.add('hidden');
        });
      }
    }
  );
}
