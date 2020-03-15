import { Element }  from './Element.js';


export class MobileCardBack extends Element {

	constructor() {
		super();
	}

	onInit(props) {
		this.setState(props);
	}

	render() {
		return `
			<div class="mobile-card mobile-card-back">
				<p>Full Stack Developer</p>
				<div class="details">
					<a href="tel:709-770-5564">(709) 770-5564</a>
					<a href="mailto:michael_mather@hotmail.com">michael_mather@hotmail.com</a>
				</div>
				<p class="mobile-faded-text">•Developer •Designer</p>
			</div>
		`;
	}
}