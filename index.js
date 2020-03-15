import { initializeApp } from './src/Element.js';
import { CardFront } from './src/CardFront.js';
import { CardBack } from './src/CardBack.js';

const components = [
	{name: 'card-front', component: CardFront},
	{name: 'card-back', component: CardBack}
];

initializeApp(components);