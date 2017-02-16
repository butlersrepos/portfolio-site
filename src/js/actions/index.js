import Type from './action-types'

let menuToggle = val => { return { type: Type.MENU_TOGGLE, isOpen: val } }

export default {
	menuToggle
}

