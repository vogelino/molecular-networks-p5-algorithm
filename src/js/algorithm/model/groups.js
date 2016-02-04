const Immutable = require('immutable');
import defaults from '../defaults';
import Group from './group';

/**
 * @class A list containing groups groups (data)
 * @return {Function} An instance of the class
 */
const Groups = () => {
	let p5;
	let that = {};

	/**
	 * Retrieves all groups in a list
	 * @return {Immutable.List} - The list of all groups
	 */
	that.getGroups = () => {
		let groups = Immutable.List();
		for (let i = 1; i <= defaults.get('groupsAmount'); i++) {
			groups = groups.push(Group(p5).createGroup(i));
		}
		return groups;
	};

	return that;
};

export default Groups;
