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
        <div class="banners">
          <Banner>
            <!-- Pierwszy baner -->
            <p>Learn Language!</p>
          </Banner>
          <Banner>
            <!-- Drugi baner -->
            Nauka języków obcych może być nie tylko przydatna, ale i fascynująca, a nowoczesne
            aplikacje mogą sprawić, że stanie się ona prawdziwą przyjemnością!
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
  background-color: $banner-background;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ccc;
  border-radius: 10px;
}

p {
  font-style: italic;
  font-size: 55px;
}
</style>
