import types from './mutation-types'

export default {
  [types.CHANGE_FOOTER_TAP] (state, tap) {
    state.footer_tab_class = tap
  },
  [types.CHANGE_SEARCH_BAR_SHOW] (state, tick) {
    state.search_bar_show = tick
  },
  [types.CHANGE_FOOTER_NAV_SHOW] (state, tick) {
    state.footer_nav_show = tick
  },
  [types.CHANGE_DETAILS_NAV_SHOW] (state, tick, title) {
    state.details_nav_show = tick
    state.details_title = title
  }
}
