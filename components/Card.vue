<template>
  <div
    :style="{
      backgroundImage: `url(${items.video.thumb})`
    }"
    class="card">
    <span @click="$emit('play')">Play :)</span>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    items: { type: Object, default: () => ({}) }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 300px;
  box-shadow: 0px 5px 30px #f4f4f4;
  margin: 10px;
  transition: all .3s ease-in;
  background-size: cover;
  position: relative;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 5px 5px 30px 9px #f4f4f4;
  }

  &::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 300px;
    height: 300px;
    background-color: rgba(0, 0, 0, .6);
    border-radius: 4px;
    z-index: 1;
  }

  > span {
    font-size: 30px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    z-index: 3;
  }
}
</style>
