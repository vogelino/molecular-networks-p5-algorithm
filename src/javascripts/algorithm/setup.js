export default (p5, props) => {
	p5.createCanvas(p5.windowWidth, p5.windowHeight);
	p5.colorMode(p5.HSB, 360, 100, 100, 100);

	p5.background(props.backgroundColor);
};