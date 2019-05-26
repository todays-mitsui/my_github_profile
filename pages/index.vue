<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <figure class="image is-square">
          <img :src="avatarUrl" :alt="login" />
        </figure>
      </div>

      <div class="column">
        <h1 class="title">{{ name }}</h1>
        <h2 class="subtitle">{{ login }}</h2>
        <article>{{ bio }}</article>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <h2 class="subtitle">Repogitories</h2>

        <div class="list is-hoverable">
          <a
            v-for="repo in repositories"
            :key="repo.name"
            class="list-item"
            :href="repo.url"
            target="_blank"
          >
            {{ repo.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'login',
      'name',
      'avatarUrl',
      'bio',
      'bioHTML',
      'repositoryCount',
      'repositories'
    ])
  },

  mounted() {
    this.fetchUserData()
  },

  methods: {
    ...mapActions(['fetchUserData'])
  }
}
</script>

<style scoped>
.columns:not(:first-child) {
  margin-top: 30px;
}
</style>
