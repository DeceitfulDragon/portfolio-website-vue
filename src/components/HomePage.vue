<template>
  <main id="home" class="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cover bg-portfolio-home bg-center overflow-hidden">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4">
      <!-- Text Content -->
      <article class="lg:w-1/2 text-center lg:text-left flex flex-col justify-between sm:justify-center h-full pb-18">
        <div>
          <h1 ref="heading" class="text-base sm:text-lg lg:text-2xl font-heading mt-0 lg:mt-0 opacity-0">It's me,</h1>
          <h2 ref="subheading" class="text-4xl sm:text-4xl lg:text-8xl font-primary font-bold text-green-primary mt-2 lg:mt-0 opacity-0">DeceitfulDragon</h2>
          <p ref="description" class="text-sm sm:text-base lg:text-lg max-w-md lg:max-w-lg mx-auto lg:mx-0 mt-4 lg:mt-6 font-primary opacity-0">
            Full Stack Web Developer and Hobbyist with a passion for creating efficient and scalable web applications.
          </p>
        </div>
        <div>
          <ul class="flex justify-center lg:justify-start space-x-4 mt-4 lg:mt-8">
            <li ref="link1" class="opacity-0">
              <a href="https://github.com/DeceitfulDragon" target="_blank" aria-label="GitHub" class="text-2xl sm:text-3xl text-white hover:text-green-primary">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li ref="link2" class="opacity-0">
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="text-2xl sm:text-3xl text-white hover:text-green-primary">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li ref="link3" class="opacity-0">
              <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="text-2xl sm:text-3xl text-white hover:text-green-primary">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li ref="link4" class="opacity-0">
              <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="text-2xl sm:text-3xl text-white hover:text-green-primary">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          
          <!-- Router link wrapper so I can animate it properly (had issues with the opacity not changing) -->
          <div ref="aboutLinkWrapper" class="opacity-0">
            <router-link to="/about" class="inline-block px-6 py-2 bg-green-primary text-white rounded-lg transition-colors hover:bg-green-900 mt-6 lg:mt-8 w-fit font-secondary">
              About Me
            </router-link>
          </div>
        </div>
      </article>

      <!-- Profile Image -->
      <aside class="w-full lg:w-1/2 h-full flex justify-center lg:justify-end">
        <img ref="profileImage" src="@/assets/images/just_me.webp" alt="DeceitfulDragon" class="w-2/3 sm:w-1/2 lg:w-full lg:max-w-2xl lg:max-h-full opacity-0 lg:absolute lg:bottom-0">
      </aside>
    </div>
  </main>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: 'HomePage',
  mounted() {
    anime.timeline()
      .add({
        targets: this.$refs.heading,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 350,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.subheading,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 350,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.description,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 350,
        easing: 'easeOutQuad',
      })
      .add({
        targets: [this.$refs.link1, this.$refs.link2, this.$refs.link3, this.$refs.link4],
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 200,
        easing: 'easeOutQuad',
        delay: anime.stagger(100),
      })
      .add({
        targets: this.$refs.aboutLinkWrapper,
        opacity: [0, 1],
        translateX: [-200, 0],
        duration: 350,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.profileImage,
        opacity: [0, 1],
        duration: 750,
        easing: 'easeOutQuad',
      });
  },
};
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
}
</style>