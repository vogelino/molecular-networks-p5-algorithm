/* global window */
const Immutable = require('immutable');
import defaults from '../defaults';
import Group from './group';

/**
 * @class Connects the dots together
 * Saves the points of the connections to neighbours in the model
 * @return {Function} - An instance of the class
 */
const Groups = () => {
	let that = {};

	/**
	 * Connects the forms toghether
	 * @param  {Immutable.Map} group - A Group (data) of forms
	 * @return {Immutable.Map}       - A Group (data) of forms with their connections
	 */
	that.connectForms = (group) => {
		let rows = group.get('rows');
		let columns = group.get('columns');
		const finalForms = group.get('forms').map((form) => {
			let connections = Immutable.List([]);
			const isFirstColumn = form.get('column') === 1;
			const isFirstRow = form.get('row') === 1;
			const isLastRow = form.get('row') === rows;
			const isLastColumn = form.get('column') === columns;
			let forms = group.get('forms');
			let rightSibling;
			let leftSibling;
			let topSibling;
			let bottomSibling;

			if (!form.get('circle')) {
				return form;
			}
			if (!isFirstRow) {
				topSibling = that.getFormByPosition(
					forms, form.get('row') - 1, form.get('column'));
				if (topSibling.get('circle')) {
					connections = connections.push(
						that.addConnection('top', form, topSibling));
				}
			}
			if (!isFirstColumn) {
				leftSibling = that.getFormByPosition(
					forms, form.get('row'), form.get('column') - 1);
				if (leftSibling.get('circle')) {
					connections = connections.push(
						that.addConnection('left', form, leftSibling));
				}
			}
			if (!isLastRow) {
				bottomSibling = that.getFormByPosition(
					forms, form.get('row') + 1, form.get('column'));
				if (bottomSibling.get('circle')) {
					connections = connections.push(
						that.addConnection('bottom', form, bottomSibling));
				}
			}
			if (!isLastColumn) {
				rightSibling = that.getFormByPosition(
					forms, form.get('row'), form.get('column') + 1);
				if (rightSibling.get('circle')) {
					connections = connections.push(
						that.addConnection('right', form, rightSibling));
				}
			}

			return form.set('connections', connections);
		});

		return group.set('forms', finalForms);
	};

	/**
	 * Adds a connection between one form and the other
	 * @param  {String} dir       - Direction of the connection.
	 * Wether 'right', 'left', 'top' or bottom
	 * @param  {Immutable.Map} startForm - The form (data) to connect from
	 * @param  {Immutable.Map} endForm   - The form (data) to connect to
	 * @return {Immutable.Map}           - A Map with startPoint and endPoint (coordinates)
	 */
	that.addConnection = (dir, startForm, endForm) => {
		let startPoint = {};
		let endPoint = {};
		switch (dir) {
			case 'right':
				startPoint = startForm.getIn([ 'circle', 'arcPoints' ]).right;
				endPoint = endForm.getIn([ 'circle', 'arcPoints' ]).left;
				break;
			case 'left':
				startPoint = startForm.getIn([ 'circle', 'arcPoints' ]).left;
				endPoint = endForm.getIn([ 'circle', 'arcPoints' ]).right;
				break;
			case 'top':
				startPoint = startForm.getIn([ 'circle', 'arcPoints' ]).top;
				endPoint = endForm.getIn([ 'circle', 'arcPoints' ]).bottom;
				break;
			case 'bottom':
				startPoint = startForm.getIn([ 'circle', 'arcPoints' ]).bottom;
				endPoint = endForm.getIn([ 'circle', 'arcPoints' ]).top;
				break;
			default:
				break;
		}

		return Immutable.Map({ startPoint, endPoint });
	};

	/**
	 * Get a form in the matrix by position
	 * @param  {Immutable.List} forms  - All the forms (data)
	 * @param  {Number} row    - The row number where the needed form is located in
	 * @param  {Number} column - The column number where the needed form is located in
	 * @return {Immutable.Map}        - The Form (data) located in the given position
	 */
	that.getFormByPosition = (forms, row, column) => {
		return forms.find((form) => {
			return form.get('row') === row &&
				form.get('column') === column;
		});
	};

	return that;
};

export default Groups;
