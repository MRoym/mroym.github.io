import { Element }  from './Element.js';


export class CardBack extends Element {

	constructor() {
		super();
	}

	onInit(props) {
		this.setState(props);
	}

	render() {
		return `
			<div class="card card-back card-${this.state.orientation}">
				<p class="faded-text">•Developer •Designer</p>
				<div class="details">
					<p>Full Stack Developer</p>
					<div class="details-inner">
						<a href="tel:709-770-5564">(709) 770-5564</a>
						<a href="mailto:michael_mather@hotmail.com">michael_mather@hotmail.com</a>
					</div>
				</div>
			</div>
		`;
	}
}