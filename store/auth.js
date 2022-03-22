export const state = () => ({
  isAuth: false,
})

export const getters = {
  getIsAuth: (state) => state.isAuth,
}

export const mutations = {
  setIsAuth(state, bool) {
    state.isAuth = bool
  },
}

export const actions = {
  changeIsAuth({ commit }, bool) {
    commit('setIsAuth', bool)
  },
}
