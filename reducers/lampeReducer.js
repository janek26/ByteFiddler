export default (state = {
	red:0,
	green:0,
	blue:0,
	transparency:0,
}, action) => {
	switch (action.type) {
		case 'CHANGE_LAMPE':
			return {
				...state,

			}
			break;
		default:
			return state
	}
}
