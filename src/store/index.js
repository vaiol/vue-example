import users from './modules/users'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    users
  },
  strict: debug
})
