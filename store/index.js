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
  async fetchUserData({ commit }) {
    await this.app.$apolloHelpers.onLogin(process.env.GITHUB_API_TOKEN)

    const client = this.app.apolloProvider.defaultClient

    try {
      const { data } = await client.query({ query: fetchUserData })

      commit('fetchUserData', data)
    } catch (err) {
      console.error(err)
    }
  }
}
