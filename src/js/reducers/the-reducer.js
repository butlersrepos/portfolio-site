import clone from 'lodash/clone'
import Types from '../actions/action-types'

const initialState = {
  isMenuOpen: false,
  isProfane: false
}

export default function (state = initialState , action) {
  let nextState = clone(state || {})

  switch (action.type) {
    case Types.MENU_TOGGLE:
      return Object.assign({}, state, { isMenuOpen: action.isOpen })
    case Types.PROFANITY_TOGGLE:
      return Object.assign({}, state, { isProfane: action.value })
  }

  return nextState
}
