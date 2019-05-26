import fetchUserData from '~/queries/fetchUserData.graphql'

export const state = () => {
  return {
    login: null,
    name: null,
    avatarUrl: null,
    bio: null,
    bioHTML: null
  }
}

export const mutations = {
  fetchUserData(state, { user }) {
    state.login = user.login
    state.name = user.name
    state.avatarUrl = user.avatarUrl
    state.bio = user.bio
    state.bioHTML = user.bioHTML
  }
}

export const actions = {
  fetchUserData({ commit }) {
    console.log(this.app)
    console.log(this.app.apolloProvider)

    const client = this.app.apolloProvider.defaultClient

    client
      .query({ query: fetchUserData })
      .then(({ data }) => {
        commit('fetchUserData', data)
      })
      .catch(err => {
        console.error(err)
      })
  }
}
