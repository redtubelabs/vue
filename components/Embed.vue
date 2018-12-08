<template>
  <div class="container">
    <span
      @click="$emit('close')"
      class="container--close">X</span>
    <iframe class="container-iframe" :src="video.embed_url" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Embed',
  props: {
    video: { type: Object, default: () => ({}) }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;

  &--close {
    position: absolute;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #444;
    color: white;
    top: -20px;
    right: -20px;
    cursor: pointer;
  }
  
  &-iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
