import { initializeApp } from './src/Element.js';
import { CardFront } from './src/CardFront.js';
import { CardBack } from './src/CardBack.js';
import { MobileCardBack } from './src/MobileCardBack.js';
import { MobileCardFront } from './src/MobileCardFront.js';

const components = [
	{name: 'card-front', component: CardFront},
	{name: 'card-back', component: CardBack},
	{name: 'mobile-card-front', component: MobileCardFront},
	{name: 'mobile-card-back', component: MobileCardBack}
];

initializeApp(components);