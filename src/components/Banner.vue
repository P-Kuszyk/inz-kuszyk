<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Banners'
}
</script>

<style scoped lang="scss">
.banner {
  width: 80%;
  height: 150px;
  background-color: $banner-background;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  text-align: center;
}
</style>
