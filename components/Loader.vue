<template>
  <span class="loader"></span>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
@keyframes go-left {
  0% { margin-left: 0px; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0%; }
  100% { margin-left: 100%; margin-right: 0; }
}

.loader {
  position: absolute;
  bottom: 0px;
  height: 3px;
  width: 100%;
  display: flex;

  &::after {
    content: "";
    background-color: #A955E2;
    width: 100%;
    height: 3px;
    animation: go-left 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
}
</style>
