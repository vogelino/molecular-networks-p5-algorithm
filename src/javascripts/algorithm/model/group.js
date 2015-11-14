const Immutable = require('immutable');
import defaults from '../defaults';
import Form from './form';
import Connector from './connector';

const Group = () => {
	const p5 = window.p5;
	let that = {};

	that.construct = () => {};

	that.createGroup = (id) => {
		const size = defaults.get('wrapperSize');
		let rows = Math.ceil(p5.windowWidth / size) + 1;
		let columns = Math.ceil(p5.windowWidth / size) + 1;
		let formPosX = 0 - (size / 2);
		let formPosY = formPosX;
		let columnPosX = formPosX;
		let rowPosY = formPosY;
		let forms = Immutable.List([]);

		for (let row = 1; row <= rows; row++) {
			for (let column = 1; column <= columns; column++) {
				const form = Immutable.Map({
					id: `${id}-${row}-${column}`,
					circleColor: defaults.get('mainColor'),
					x: columnPosX,
					y: rowPosY,
					size,
					row,
					column
				});
				forms = forms.push(Form(form));
				columnPosX = column === columns ?
					formPosX : columnPosX + size;
			};
			rowPosY = row === rows ? formPosY : rowPosY + size;
		};

		let group = Immutable.Map({
			id,
			rows: rows,
			columns: columns,
			forms: forms
		});

		group = Connector().connectForms(group);

		return group;
	};

	that.construct.apply(arguments);
	return that;
}

export default Group;
