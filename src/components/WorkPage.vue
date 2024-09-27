<template>
  <main id="work" class="min-h-[calc(100vh-4rem)] flex bg-cover bg-portfolio-home bg-center" style="background-attachment: fixed;">
    <div class="container mx-auto py-12 px-2">
      <!-- Professional Projects Section -->
      <section>
        <div ref="professionalHeader" class="flex items-center mb-8 opacity-0">
          <img src="@/assets/images/folder-icon.webp" alt="Professional Icon" class="w-12 h-12 mr-4">
          <h2 class="text-3xl font-bold font-primary">Professional Projects</h2>
        </div>
        <div v-for="(project, index) in codeProjects" :key="index" :ref="'project-' + index" class="opacity-0 mb-6 px-4">
          <div @click="toggleDropdown(index)" class="cursor-pointer flex items-center justify-between p-4 bg-skill-bg rounded-lg hover:bg-gray-700 transition-colors px-4">
            <!-- Dropdown arrow -->
            <span :ref="'arrow-' + index" :class="{'rotate-90': dropdowns[index]}" class="transition-transform text-3xl mr-4">></span>
            <div class="flex-grow">
              <h3 class="text-xl font-bold text-green-primary font-heading">[{{ project.created }}] {{ project.name }}</h3>
            </div>
          </div>
          <div :ref="'dropdown-' + index" v-if="dropdowns[index]" class="mt-2 p-4 bg-card-bg rounded-lg transition-max-height duration-500 ease-in-out overflow-hidden">
            <div class="flex flex-col lg:flex-row items-start lg:items-center">
              <!-- Project Image @ 1/2 width -->
              <img v-if="project.image" :src="project.image" alt="Project Image" class="w-full lg:w-1/2 h-auto rounded-lg mb-4 lg:mr-6" />
              
              <!-- Text and languages -->
              <div class="lg:w-1/2">
                <h4 class="text-lg lg:text-xl font-bold mb-2">Description:</h4>
                <p class="text-gray-300 font-primary mb-4 pl-2 text-base sm:text-lg lg:text-xl">{{ project.about }}</p>
                <!-- Repository link -->
                <h4 class="text-lg lg:text-xl font-bold mb-2">Project Link:</h4>
                <a :href="`https://github.com/${project.repo}`" class="text-blue-500 underline font-primary mb-4 pl-2 text-base sm:text-lg lg:text-xl">{{ project.repo }}</a>
                <!-- Languages header -->
                <h4 class="text-lg lg:text-xl font-bold mb-2 mt-4">Languages:</h4>
                <div class="flex flex-row mt-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
                  <div v-for="(language, langIndex) in project.languages" :key="langIndex" class="flex-grow text-center text-sm text-white py-1"> 
                    🞂 {{ language }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Personal Projects Section -->
      <section>
        <div ref="personalHeader" class="flex items-center mb-8 opacity-0">
          <img src="@/assets/images/folder-icon.webp" alt="Hobby Icon" class="w-12 h-12 mr-4">
          <h2 class="text-3xl font-bold">Personal Projects</h2>
        </div>
        <div v-for="(render, index) in renderProjects" :key="index" :ref="'project-' + (index + codeProjects.length)" class="opacity-0 mb-6 px-4">
          <div @click="toggleDropdown(index + codeProjects.length)" class="cursor-pointer flex items-center justify-between p-4 bg-skill-bg rounded-lg hover:bg-gray-700 transition-colors px-4">
            <!-- Dropdown arrow -->
            <span :ref="'arrow-' + (index + codeProjects.length)" :class="{'rotate-90': dropdowns[index + codeProjects.length]}" class="transition-transform text-3xl mr-4">></span>
            <div class="flex-grow">
              <h3 class="text-xl font-bold text-green-primary font-heading">[{{ render.created }}] {{ render.name }}</h3>
            </div>
          </div>
          <div :ref="'dropdown-' + (index + codeProjects.length)" v-if="dropdowns[index + codeProjects.length]" class="mt-2 p-4 bg-card-bg rounded-lg transition-max-height duration-500 ease-in-out overflow-hidden">
            <!-- Image @ 2/3 width -->
            <div class="flex flex-col lg:flex-row items-start lg:items-center">
              <img :src="render.image" alt="Render Image" class="w-full lg:w-2/3 h-auto rounded-lg mb-4 lg:mr-6" />
              
              <!-- About Section @ 1/3 width -->
              <div class="lg:w-1/3">
                <h4 class="text-lg lg:text-xl font-bold mb-2">Description:</h4>
                <p class="text-gray-300 font-primary mb-4 pl-2 text-base sm:text-lg lg:text-xl">{{ render.about }}</p>
                <h4 class="text-lg lg:text-xl font-bold mb-2">Link:</h4>
                <a :href="`${render.link}`" class="text-blue-500 underline font-primary mb-4 pl-2 text-base sm:text-lg lg:text-xl">{{ render.link }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  name: "WorkPage",
  data() {
    return {
      projects: [],
      dropdowns: []  // Keeps track of opened/closed state
    };
  },
  computed: {
    codeProjects() {
      return this.projects.filter(project => project.type === "code");
    },
    renderProjects() {
      return this.projects.filter(project => project.type === "render");
    }
  },
  methods: {
    async fetchProjects() {
      try {
        // Fetch my json file from github
        const response = await fetch('https://raw.githubusercontent.com/DeceitfulDragon/portfolio-website-vue/main/projects.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch projects. Status: ${response.status}`);
        }

        // Parse
        const data = await response.json();
        this.projects = data;
        this.dropdowns = new Array(this.projects.length).fill(false);

        // Trigger animations when data loads
        this.$nextTick(() => {
          this.animateHeaders();
          this.animateProjectList();
        });
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
    // == Dropdowns ==
    toggleDropdown(index) {
      // Close other dropdowns
      this.dropdowns.forEach((isOpen, i) => {
        if (i !== index && isOpen) {
          this.dropdowns[i] = false;
          this.closeDropdown(i);
        }
      });

      // Toggle the clicked dropdown
      this.dropdowns[index] = !this.dropdowns[index];

      if (this.dropdowns[index]) {
        this.openDropdown(index);
      } else {
        this.closeDropdown(index);
      }
    },
    openDropdown(index) {
      anime({
        targets: this.$refs['dropdown-' + index],
        maxHeight: [0, 1000],
        easing: 'easeInOutQuad',
        duration: 700,
      });
      anime({
        targets: this.$refs['arrow-' + index],
        rotate: '90deg',
        easing: 'easeInOutQuad',
        duration: 200,
      });
    },
    closeDropdown(index) {
      anime({
        targets: this.$refs['dropdown-' + index],
        maxHeight: [1000, 0],
        easing: 'easeInOutQuad',
        duration: 700,
      });
      anime({
        targets: this.$refs['arrow-' + index],
        rotate: '0deg',
        easing: 'easeInOutQuad',
        duration: 200,
      });
    },
    animateHeaders() {
      anime({
        targets: [this.$refs.professionalHeader, this.$refs.personalHeader],
        translateX: [-200, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
        delay: (el, i) => i * 200,
      });
    },
    animateProjectList() {
      const projectRefs = Object.keys(this.$refs).filter(ref => ref.startsWith('project-')).map(ref => this.$refs[ref]);

      anime({
        targets: projectRefs,
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i) => i * 100,
      });
    }
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.rotate-90 {
  transform: rotate(90deg);
}

.transition-max-height {
  transition: max-height 0.5s ease-in-out;
}

.bg-gradient-to-r {
  background: linear-gradient(to right, #00ae26, #000000);
}

.bg-portfolio-home {
  background-attachment: fixed;
}
</style>