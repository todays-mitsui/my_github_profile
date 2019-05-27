import fetchUserData from '~/queries/fetchUserData.graphql'

export const state = () => {
  return {
    login: null,
    name: null,
    avatarUrl: null,
    bio: null,
    bioHTML: null,
    repositoryCount: 0,
    repositories: []
  }
}

export const mutations = {
  fetchUserData(state, { user }) {
    state.login = user.login
    state.name = user.name
    state.avatarUrl = user.avatarUrl
    state.bio = user.bio
    state.bioHTML = user.bioHTML
    state.repositoryCount = user.repositories.totalCount
    state.repositories = user.repositories.nodes
  }
}

export const actions = {
  fetchUserData({ commit }) {
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
