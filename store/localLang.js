export const state = () => ({
  selectLocale: 1,
})

export const getters = {
  getLang: (state) => state.selectLocale,
}

export const mutations = {
  setSelectLocales(state, selectLocale) {
    state.selectLocale = selectLocale
  },
}

export const actions = {
  changeSelectLocale({ commit }, value) {
    commit('setSelectLocales', value)
  },
}
