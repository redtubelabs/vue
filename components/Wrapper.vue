<template>
  <div
    :style="{
      justifyContent: mayCenterize
    }"
    class="container">
    <h1 v-if="!videos.length" class="container-title">VueRedtube :D</h1>
    <div class="container--input">
      <input
        v-model="searchWord"
        @keyup.enter="search"
        placeholder="search something porn..."
        class="container--input"
        type="text" />
      <Theme />
      <Loader v-if="isLoading" />
    </div>

    <slot :videos="videos"></slot>
  </div>
</template>

<script>
import Loader from './Loader'
import Theme from './Theme';
import { HTTPClient } from '../utils/request'

export default {
  name: 'Wrapper',
  components: { Loader, Theme },
  data: () => ({
    isLoading: false,
    searchWord: '',
    listVideosMode: false,
    videos: []
  }),
  computed: {
    mayCenterize () {
      return this.listVideosMode ? 'flex-start' : 'center'
    }
  },
  methods: {
    async search () {
      this.isLoading = true
      const params = { search: this.searchWord }
      const { data } = await HTTPClient.get('/', { params })
      this.listVideosMode = true
      this.videos = data.videos
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes go-left {
  0% { margin-left: 0px; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0%; }
  100% { margin-left: 100%; margin-right: 0; }
}

.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 0px;
  transition: all .4s ease-in;
  
  &-title {
    color: #A955E2;
    font-size: 55px;
  }

  &--input {
    position: relative;
    width: 50%;

    > input {
      margin-top: 20px;
      padding: 10px;
      outline: none;
      font-size: 20px;
      width: 100%;
      border-radius: 4px;
      border: 1px solid #f4f4f4;
      transition: all .3s ease-in;

      &:focus {
        border: 1px solid #A955E2;
      }
    }
  }
}

.dark-theme {
  .container {
    &--input {
      > input {
        background-color: #2f3640;
        color: #dcdde1;
        border-color: lighten(#353b48, 5%);

        &:focus {
          border: 1px solid #A955E2;
        }
      }
    }
  }
}
</style>
