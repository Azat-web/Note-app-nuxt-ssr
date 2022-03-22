export default function ({ store, redirect }) {
  const auth = store.getters['auth/getIsAuth']
  if (!auth) {
    redirect('/auth')
  }
}
