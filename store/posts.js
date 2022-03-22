export const state = () => ({
  posts: [],
  searchPost: '',
})

export const getters = {
  getPosts: (state) => state.posts.slice(),
  getSearchPost: (state) => state.searchPost,
}

export const mutations = {
  setSelectLocales(state, posts) {
    state.posts = posts
  },
  setPosts(state, posts) {
    state.posts = posts
  },
  setSearchPost(state, searchPost) {
    state.searchPost = searchPost
  },
}

export const actions = {
  changeSelectLocale({ commit }, value) {
    commit('setSelectLocales', value)
  },
  changePosts({ commit }, posts) {
    commit('setPosts', posts)
  },
  searchPost({ commit }, post) {
    commit('setSearchPost', post)
  },
}
