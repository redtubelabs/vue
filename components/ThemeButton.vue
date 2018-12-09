<template>
  <div class="container">
    <button @click="toggleTheme">
      {{ theme === 'light' ? 'Tema escuro' : 'Tema claro' }}
    </button>
  </div>
</template>

<script>
  export default {
    name: "ThemeButton",
    data: () => ({
      theme: 'light',
    }),
    mounted() {
      this.getCurrentTheme()
    },
    methods: {
      getCurrentTheme() {
        const theme = window.localStorage.getItem('vue:theme')

        if(theme) {
          this.theme = theme
        }
      },
      toggleTheme() {
        this.theme = this.theme === 'light'
          ? 'dark'
          : 'light'
      },
      setTheme() {
        window.localStorage.setItem('vue:theme', this.theme)
      }
    },
    watch: {
      'theme'() {
        this.setTheme()
        this.$root.$emit('changeTheme', this.theme)
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  /*position: fixed;*/
  /*top: 1rem;*/
  /*right: 1rem;*/

  /*justify-self: center;*/
}
</style>
