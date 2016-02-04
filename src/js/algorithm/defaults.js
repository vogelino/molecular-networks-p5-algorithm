const Immutable = require('immutable');

/**
 * Options to set for configuring the look of the algorithm
 * @type {Immutable.Map}
 */
export default Immutable.Map({
	groupsAmount: 1,
	circleMinSize: 10,
	lineWeight: 1,
	backgroundColor: '#f5f5f5',
	wrapperSize: 30,
	mainBrightness: 50,
	mainColor: '#000',
	formMargin: 6,
	circleProbability: 60
});
