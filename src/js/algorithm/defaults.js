const Immutable = require('immutable');

/**
 * Options to set for configuring the look of the algorithm
 * @type {Immutable.Map}
 */
export default Immutable.Map({
	groupsAmount: 1,
	circleMinSize: 2,
	lineWeight: 1,
	backgroundColor: '#282828',
	wrapperSize: 30,
	mainHue: Math.random() * 360,
	formMargin: 2,
  circleProbability: 0.5,
  fragmentation: 20
});
