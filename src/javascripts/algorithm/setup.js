import defaults from './defaults';

export default (p5) => {
	let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
	canvas.position(0, 0);
  	canvas.class('p5-canvas');
  	canvas.parent('molectular-algorithm');
	p5.colorMode(p5.HSB, 360, 100, 100, 100);

	p5.background(defaults.get('backgroundColor'));
};