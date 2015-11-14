const Immutable = require('immutable');
import defaults from '../defaults';
import Group from './group';

const Groups = () => {
	let p5 = window.p5;
	let that = {};

	that.construct = () => {};

	that.connectForms = (group) => {
		let rows = group.get('rows');
		let columns = group.get('columns');
		const forms = group.get('forms').map((form) => {
			let connections = Immutable.List([]);
			const isFirstColumn = form.get('column') === 1;
			const isFirstRow = form.get('row') === 1;
			const isLastRow = form.get('row') === rows;
			const isLastColumn = form.get('column') === columns;
			let forms = group.get('forms');
			let
				rightSibling,
				leftSibling,
				topSibling,
				bottomSibling;

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

		return group.set('forms', forms);
	};

	that.addConnection = (dir, startForm, endForm) => {
		let startPoint = {};
		let endPoint = {};
		switch(dir) {
			case 'right':
				startPoint = startForm.getIn(['circle', 'arcPoints']).right;
				endPoint = endForm.getIn(['circle', 'arcPoints']).left;
			break;
			case 'left':
				startPoint = startForm.getIn(['circle', 'arcPoints']).left;
				endPoint = endForm.getIn(['circle', 'arcPoints']).right;
			break;
			case 'top':
				startPoint = startForm.getIn(['circle', 'arcPoints']).top;
				endPoint = endForm.getIn(['circle', 'arcPoints']).bottom;
			break;
			case 'bottom':
				startPoint = startForm.getIn(['circle', 'arcPoints']).bottom;
				endPoint = endForm.getIn(['circle', 'arcPoints']).top;
			break;
		}

		return Immutable.Map({ startPoint, endPoint });
	};

	that.getFormByPosition = (forms, row, column) => {
		return forms.find((form) => {
			return form.get('row') === row &&
				form.get('column') == column;
		});
	};

	that.construct.apply(arguments);
	return that;
}

export default Groups;
