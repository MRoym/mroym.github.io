class Element extends HTMLElement {

	state = {};

	constructor() {
		super()
	}

	connectedCallback() {
		this.generateProps();
	}

	renderComponent() {
		this.innerHTML = this.render();
	}

	setState(newState) {
		this.state = {...newState};
		this.renderComponent();
		return this.state;
	}

	generateProps() {
		const props = {};
		const atts = this.attributes;
		for (let i = 0; i < atts.length; i++) {
			props[atts[i].name] = atts[i].value;
		}
		this.renderComponent();
		return this.onInit(props);
	}

	render() {
		throw new Error('You need to implement the render method of your component');
	}

	onInit(props) {
		throw new Error('You need to implement the render method of your component');	
	}
}

const initializeApp = components => {
	components.forEach(c => {
		customElements.define(c.name, c.component);
	});
}

export { Element, initializeApp };