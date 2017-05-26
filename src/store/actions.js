import types from './mutation-types'

export default {
  [types.CHANGE_FOOTER_TAP] ({commit}, tap) {
    commit(types.CHANGE_FOOTER_TAP, tap)
  },
  [types.CHANGE_SEARCH_BAR_SHOW] ({commit}, tick) {
    commit(types.CHANGE_SEARCH_BAR_SHOW, tick)
  },
  [types.CHANGE_FOOTER_NAV_SHOW] ({commit}, tick) {
    commit(types.CHANGE_FOOTER_NAV_SHOW, tick)
  },
  [types.CHANGE_DETAILS_NAV_SHOW] ({commit}, tick, title) {
    commit(types.CHANGE_DETAILS_NAV_SHOW, tick, title)
  }
}
