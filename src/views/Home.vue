<script>
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Navbar,
    Banner
  }
}
</script>

<template>
  <div>
    <Navbar />
    <section class="section">
      <div class="container">
        <h1 class="title">Strona Główna</h1>
        <p>Treść strony głównej...</p>
        <div class="banners">
          <Banner>
            <!-- Pierwszy baner -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Banner>
          <Banner>
            <!-- Drugi baner -->
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Banner>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.section {
  text-align: center;
}

.banners {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;

  :nth-child(2) {
    margin-top: 2rem;
  }
}

.banner {
  width: 80%;
  height: 150px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 10px;
}
</style>
