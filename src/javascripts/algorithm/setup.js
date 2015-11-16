import defaults from './defaults';

const Setup = () => {
	let
		p5 = window.p5,
		canvas;
	const that = {};

	that.setupCanvas = () => {
		canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
		canvas.position(0, 0);
	  	canvas.class('p5-canvas');
	  	canvas.parent('molectular-algorithm');
		p5.colorMode(p5.HSB, 360, 100, 100, 100);

		p5.background(defaults.get('backgroundColor'));
	};

	that.onKeyTyped = (key) => {
		if(key.keyCode === 115) {
			p5.saveCanvas(canvas, 'molecular-networks-export', 'png');
		}
	};

	return that;
};

export default Setup;
