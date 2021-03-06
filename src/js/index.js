/* global window */
const P5 = require('p5');
const P5dom = require('p5/lib/addons/p5.dom');
import Immutable from 'immutable';
import setup from './algorithm/setup';
import Drawer from './algorithm/drawer';
import Groups from './algorithm/model/groups';
import styles from '../styles/global.styl';

/**
 * Initialisation of the algorithm.
 * To be passed to a p5 class
 * @param  {reference to p5} p5 - To be made global
 */
const algorithm = (p5) => {
	window.p5 = p5;
	let groups = Groups();
	groups = Immutable.List(groups.getGroups());
	p5.setup = setup().setupCanvas;
	p5.keyTyped = setup().onKeyTyped;
	p5.draw = () => {
		const drawer = new Drawer(p5);
		drawer.drawGroups(groups);
		p5.noLoop();
	};
};

new P5(algorithm);
