export default (p5, props) => {
	let groups = getGroups(props.groupsAmount);
	drawGroups(groups);
};
