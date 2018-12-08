<template>
  <div class="modal">
    <div class="modal-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  &-body {
    width: 600px; 
    height: 400px;
    background-color: white;
    border-radius: 4px;
    padding: 5px;
  }
}
</style>
