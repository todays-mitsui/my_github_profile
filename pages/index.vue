<template>
  <section class="section">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-quarter">
              <img :src="avatarUrl" :alt="login" />
            </div>

            <div class="column">
              <h1 class="title">{{ name }}</h1>
              <h2 class="subtitle">{{ login }}</h2>
              <article v-html="bioHTML"></article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['login', 'name', 'avatarUrl', 'bio', 'bioHTML'])
  },

  mounted() {
    this.fetchUserData()
  },

  methods: {
    ...mapActions(['fetchUserData'])
  }
}
</script>
