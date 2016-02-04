/* global window */
const Immutable = require('immutable');
import defaults from '../defaults';
import Group from './group';

/**
 * @class A form (data)
 * @param  {Immutable.Map} configs - The configurations of the form
 * @return {Immutable.Map}         - The form (data)
 */
const Form = (configs) => {
	const margin = defaults.get('formMargin');
	const p5 = window.p5;
	const hasCircle = p5.random(0, 100) < defaults.get('circleProbability');
	const circleSize = p5.random(
		defaults.get('circleMinSize'),
		defaults.get('wrapperSize') - margin);
	let form = configs
			.update('x', x => p5.random(x - margin, x + margin))
			.update('y', y => p5.random(y - margin, y + margin));
	const circleX = form.get('x') + (defaults.get('wrapperSize') / 2);
	const circleY = form.get('y') + (defaults.get('wrapperSize') / 2);
	let circle = Immutable.Map({
		x: circleX,
		y: circleY,
		size: circleSize,
		circleColor: form.get('circleColor'),
		arcPoints: {}
	});

	form = form.set('circle', circle);

	if (circle) {
		const circleCenter = circleSize / 2;
		circle = circle.set('arcPoints', {
			top: {
				x: circleX,
				y: circleY - circleCenter,
				bezierX: circleX,
				bezierY: configs.get('y')
			},
			bottom: {
				x: circleX,
				y: circleY + circleCenter,
				bezierX: circleX,
				bezierY: configs.get('y') + form.get('size')
			},
			left: {
				x: circleX - circleCenter,
				y: circleY,
				bezierX: configs.get('x'),
				bezierY: circleY
			},
			right: {
				x: circleX + circleCenter,
				y: circleY,
				bezierX: configs.get('x') + form.get('size'),
				bezierY: circleY
			}
		});
		form = form.set('circle', circle);
	}

	if (!hasCircle) {
		form = form.set('circle', false);
	}
	return form;
};

export default Form;
