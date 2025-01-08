<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
<template>
  <Navbar />
  <div class="textareaDiv">
    <textarea></textarea>
    <textarea></textarea>
    <textarea></textarea>
    <textarea></textarea>
  </div>
</template>
<style scoped lang="scss">
.textareaDiv {
  display: flex;
  justify-content: center;
}
textarea {
  width: 100%;
  resize: none;
  padding: 5px;
}
</style>
