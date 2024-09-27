<template>
  <main id="about" class="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cover bg-center bg-portfolio-about">
    <section class="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4">
      <!-- About Section -->
      <section class="lg:w-1/2 text-white mb-8 lg:mb-0 max-w-skill">
        <h2 ref="heading" class="text-4xl font-heading mb-4 opacity-0">About Me</h2>
        <p ref="paragraph1" class="text-base lg:text-lg mb-4 font-primary opacity-0">
          I'm <span class="text-green-primary font-bold">DeceitfulDragon</span>, but you can also call me <span class="text-green-primary font-bold">Hunter</span>. 
          I'm a Full Stack Web Developer with a knack for responsive websites using HTML/CSS/JS. I really enjoy diving into the back-end side of things where 
          I can play around with data and bring websites to life. My design taste generally fits simple colors and clean, minimalist vibes.
        </p>
        <p ref="paragraph2" class="text-base lg:text-lg mb-4 font-primary opacity-0">
          When I'm not coding for work, you'll find me playing around with my own projects. I love using C# in Unity to test out and create games. 
          I've also messed around with Lua (& gLua + Luau) for other games. I'm really into 3D modeling, typically with Blender and Substance Painter 
          to make some clean renders. I've taught myself Photoshop for making graphics or altering images, and Premiere Pro for stringing together my game clips 
          with subtitles or fun edits.
        </p>
        <p ref="paragraph3" class="text-base lg:text-lg mb-4 font-primary opacity-0">
          I'm not completely online though! I love being outdoors and taking trips around the country. Winter may be a tough time for many, 
          but it's definitely my favorite season. There's something serene about nature taking a break while snow makes everything a glistening white. 
          I'm super social and pretty outgoing, always down to swap ideas or just connect with others.
        </p>
      </section>
      <!-- Skills Section -->
      <section class="lg:w-1/2 max-w-skill">
        <h2 ref="toolsetheading" class="text-4xl font-heading mb-4 text-white">My Toolset</h2>
        <ul ref="toolset" class="grid grid-cols-2 sm:grid-cols-3 gap-3 font-primary">
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-html5-plain colored"></i> <span>HTML</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-css3-plain colored"></i> <span>CSS</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-javascript-plain colored"></i> <span>JavaScript</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-jquery-plain colored"></i> <span>jQuery</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-nodejs-plain colored"></i> <span>Node</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-vuejs-plain colored"></i> <span>Vue</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-tailwindcss-original colored"></i> <span>Tailwind</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-express-original"></i> <span>Express</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-jest-plain colored"></i> <span>Jest</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-bootstrap-plain colored"></i> <span>Bootstrap</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-sass-original"></i> <span>SASS</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-mysql-original colored"></i> <span>MySQL</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-postgresql-plain colored"></i> <span>Postgres</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-sequelize-plain colored"></i> <span>Sequelize</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-jekyll-plain colored"></i> <span>Jekyll</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-csharp-plain colored"></i> <span>C#</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-git-plain colored"></i> <span>Git & Github</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-insomnia-plain colored"></i> <span>Insomnia</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-unity-plain colored"></i> <span>Unity</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-blender-original colored"></i> <span>Blender</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-illustrator-plain colored"></i> <span>Substance Painter</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-photoshop-plain colored"></i> <span>Photoshop</span>
          </li>
          <li class="bg-skill-bg text-white p-3 rounded-large shadow flex items-center justify-center space-x-2 opacity-0">
            <i class="devicon-premierepro-plain colored"></i> <span>Premiere Pro</span>
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

// Animations
export default {
  name: 'AboutPage',
  mounted() {
    anime.timeline()
      .add({
        targets: this.$refs.heading,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.paragraph1,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.paragraph2,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.paragraph3,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.toolsetheading,
        translateX: [-200, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
      })
      .add({
        targets: this.$refs.toolset.querySelectorAll('li'),
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 100,
        easing: 'easeOutQuad',
        delay: anime.stagger(100),
      });
  },
};
</script>

<style scoped>
.opacity-0 {
  opacity: 0;
}
</style>