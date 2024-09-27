<template>
  <main id="about" class="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cover bg-center bg-portfolio-contact">
    <section ref="formSection" class="w-full max-w-3xl p-8 border border-white rounded-lg shadow-lg text-center opacity-0 scale-90">
      <h1 ref="formHeading" class="text-3xl font-bold font-secondary text-green-primary mb-4 opacity-0">Contact Me</h1>
      <p ref="formText" class="text-white mb-6 font-primary opacity-0">If you have any questions or just want to get in touch, feel free to fill out the form below!</p>
      <!-- Contact Form -->
      <form ref="form" class="flex flex-col gap-4 opacity-0" action="https://formspree.io/f/xdoqjgeq" method="POST">
        <div class="flex flex-col">
          <input type="text" name="name" required placeholder="Your Name" class="font-primary p-3 rounded border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-green-primary">
        </div>
        <div class="flex flex-col">
          <input type="email" name="email" required placeholder="Your Email" class="font-primary p-3 rounded border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-green-primary">
        </div>
        <div class="flex flex-col">
          <textarea name="message" required placeholder="Your Message" class="font-primary p-3 rounded border-2 border-gray-600 bg-gray-800 text-white h-32 resize-none focus:outline-none focus:border-green-primary"></textarea>
        </div>
        <button type="submit" class="bg-green-primary text-white py-2 px-4 rounded hover:bg-green-700 font-primary transition-colors">Send</button>
      </form>
    </section>
  </main>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

// Animations
export default {
  name: 'ContactPage',
  mounted() {
    anime.timeline()
      .add({
        targets: this.$refs.formSection,
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 600,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.formHeading,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.formText,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.form,
        opacity: [0, 1],
        duration: 800,
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