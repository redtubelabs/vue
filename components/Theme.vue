<template>
  <div class="theme">
    <button @click="toggleTheme">
      {{ theme === 'light' ? 'Dark' : 'Light' }} theme
    </button>
  </div>
</template>

<script>
  export default {
    name: "Theme",
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
.theme {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;

  button {
    padding: 10px;
    outline: none;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid #f4f4f4;
    transition: all .3s ease-in;
    background-color: white;
    cursor: pointer;

    &:hover {
      border: 1px solid #A955E2;
    }
  }
}

.dark-theme {
  .theme {
    button {
      background-color: #2f3640;
      border-color: lighten(#353b48, 5%);
      color: #dcdde1;

      &:hover {
        border: 1px solid #A955E2;
      }
    }
  }
}
</style>
