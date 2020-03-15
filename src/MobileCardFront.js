import { Element }  from './Element.js';


export class MobileCardFront extends Element {

	constructor() {
		super();
	}

	onInit(props) {
		this.setState(props);
	}

	render() {
		return `
			<div class="mobile-card mobile-card-front">
				<p>Michael Mather</p>
				<div class="mobile-icons">
					<a href="https://github.com/MRoym"><img src="/img/github.svg" alt="Github icon" width="36" height="36" /></a>
					<a href="https://www.linkedin.com/in/michael-mather-breathesuite/"><img src="/img/linkedin.svg" alt="Linkedin icon" width="36" height="36" /></a>
				</div>
			</div>
		`;
	}
}