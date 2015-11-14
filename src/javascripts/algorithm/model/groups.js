const Immutable = require('immutable');
import defaults from '../defaults';
import Group from './group';

const Groups = () => {
	let p5;
	let that = {};

	that.construct = () => {};

	that.getGroups = () => {
		let groups = Immutable.List();
		for (let i = 1; i <= defaults.get('groupsAmount'); i++) {
			groups = groups.push(Group(p5).createGroup(i));
		}
		return groups;
	};

	that.construct.apply(arguments);
	return that;
}

export default Groups;
