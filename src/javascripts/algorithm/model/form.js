const Immutable = require('immutable');
import defaults from '../defaults';
import Group from './group';

const Form = (configs) => {
	const p5 = window.p5;
	const hasCircle = p5.random(0,2) < 1;
	const circleSize = p5.random(
		defaults.get('circleMinSize'),
		defaults.get('wrapperSize') - 5);
	const circleX = configs.get('x') + (defaults.get('wrapperSize') / 2);
	const circleY = configs.get('y') + (defaults.get('wrapperSize') / 2);
	let circle = Immutable.Map({
			x: circleX,
			y: circleY,
			size: circleSize,
			circleColor: configs.get('circleColor'),
			arcPoints: {}
		});

	let form = configs.set('circle', circle.toJSON());

	if (circle) {
		const circleCenter = circleSize / 2;
		circle = circle.set('arcPoints', {
			top: {x: circleX, y: circleY - circleCenter},
			bottom: {x: circleX, y: circleY + circleCenter},
			left: {x: circleX - circleCenter, y: circleY},
			right: {x: circleX + circleCenter, y: circleY}
		});
		form = configs.set('circle', circle);
	}

	if (!hasCircle) { form = form.set('circle', false); }

	return form;
}

export default Form;
