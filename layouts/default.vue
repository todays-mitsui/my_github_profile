<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <h1 class="navbar-item title">My GitHub Profile</h1>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li>
            <nuxt-link to="/"> <b-icon :icon="'home'" /> HOME </nuxt-link>
          </li>
          <li>
            <a
              href="https://github.com/todays-mitsui/my_github_profile"
              target="_blank"
            >
              <b-icon :icon="'fa fa-github'" /> GitHub
            </a>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style scoped>
.title {
  color: #fff;
}

.title a {
  color: inherit;
}
</style>
