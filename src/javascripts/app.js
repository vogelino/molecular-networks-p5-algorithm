// import './asyncModules'
const P5 = require('p5');
const P5dom = require('p5/lib/addons/p5.dom');
const Immutable = require('immutable');
import setup from './algorithm/setup';
import Drawer from './algorithm/drawer';
import Groups from './algorithm/model/groups';

const algorithm = (p5) => {
	window.p5 = p5;
	let groups = Groups();
	groups = Immutable.List(groups.getGroups());
	p5.setup = () => {
		setup(p5);
	};
	p5.draw = () => {
		const drawer = new Drawer(p5);
		drawer.drawGroups(groups);
		p5.noLoop();
	};
}

new P5(algorithm);
