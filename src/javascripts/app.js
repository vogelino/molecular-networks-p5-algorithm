// import './asyncModules'
const P5 = require('p5');
const P5dom = require('p5/lib/addons/p5.dom');
const Immutable = require('immutable');
import defaults from './algorithm/defaults';
import setup from './algorithm/setup';
import draw from './algorithm/draw';

const algorithm = (p5) => {
	const props = defaults();
	const dataModel = Immutable.Map({});
	p5.setup = () => {
		setup(p5, props);
	};
	p5.draw = () => {
		draw(p5, props);
	}
}

new P5(algorithm);
