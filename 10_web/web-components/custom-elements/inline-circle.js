// exemplo de custom element retirado do livro javascript: the definitive guide

class InlineCircle extends HTMLElement {
	// esse método é chamado pelo browser quando
	// o elemento é inserido no documento
	connectedCallback() {
		this.style.display = 'inline-block';
		this.style.borderRadius = '50%';
		this.style.border = 'solid black 1px';
		this.style.transform = 'translateY(10%)';

		// setar um tamanho default se nenhum tiver
		// sido fornecido
		if (!this.style.width) {
			this.style.width = '0.8em';
			this.style.height = '0.8em';
		}
	}

	// esse método é chamado pelo browser quando
	// o elemento é removido do documento
	disconnectedCallback() {
		console.log('element was removed from document');
	}

	// essa propriedade estática especifica os atributos que queremos ser
	// notificados quando sofrerem uma mudança
	static get observedAttributes() {
		return ['diameter', 'color'];
	}

	// esse callback é invocado quando um dos atributos listados acima é alterado
	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case 'diameter':
				this.style.width = newValue;
				this.style.height = newValue;
				break;

			case 'color':
				this.style.backgroundColor = newValue;
				break;
		}
	}

	// definir propriedades javascript que correspondem aos atributos do elemento.
	// se uma dessas propriedades javascript forem setadas, o atributo é setado
	// e é feita a invocação de attributeChangedCallback(), que atualiza os estilos
	// do elemento
	get diameter() {
		return this.getAttribute('diameter');
	}
	set diameter(diameter) {
		this.setAttribute('diameter', diameter);
	}
	get color() {
		return this.getAttribute('color');
	}
	set color(color) {
		this.setAttribute('color', color);
	}
}

// definido o custom element (ligando a tag a sua classe)
customElements.define('inline-circle', InlineCircle);
