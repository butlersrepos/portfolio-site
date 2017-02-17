import clone from 'lodash/clone'
import Types from '../actions/action-types'

export default function (state, action) {
	let nextState = clone(state || {})

	switch (action.type) {
		case Types.MENU_TOGGLE:
			nextState.isMenuOpen = action.isOpen
			break
		case Types.PROFANITY_TOGGLE:
			nextState.isProfane = action.value
			break
	}
	
	return nextState
}
