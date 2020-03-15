import { Element }  from './Element.js';


export class CardFront extends Element {

	constructor() {
		super();
	}

	onInit(props) {
		this.setState(props);
	}

	render() {
		return `
			<div class="card card-front card-${this.state.orientation}">
				<p>${this.state.text}</p>
			</div>
		`;
	}
}