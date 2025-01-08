<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  mounted() {
    const textareas = document.querySelectorAll('textarea')
    textareas.forEach((textarea, index) => {
      textarea.value = localStorage.getItem(`textareaContent${index}`) || ''
      textarea.addEventListener('input', function () {
        localStorage.setItem(`textareaContent${index}`, this.value)
      })
    })
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
  margin-top: 50px;
  margin-right: 15px;
  width: 100%;
  resize: none;
  padding: 5px;
  height: 200px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #ffffdd 0%, #e0ffe0 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  resize: vertical;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #e0ffe0 0%, #c2e9fb 100%);
  }
  &:nth-child(1) {
    margin-left: 15px;
  }
  &::placeholder {
    color: #666;
    opacity: 0.7;
  }
}
</style>
