<template>
  <div id="app">
    <!-- Navbar -->
    <header>
      <nav class="navbar fixed top-0 w-full bg-background-color text-gray-300 p-4 z-10 font-secondary">
        <div class="container mx-auto flex justify-start items-center">
          <ul class="flex space-x-4">
            <li><router-link to="/" class="hover:text-green-primary">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-green-primary">About</router-link></li>
            <li><router-link to="/work" class="hover:text-green-primary">Work</router-link></li>
            <li><router-link to="/contact" class="hover:text-green-primary">Contact</router-link></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Adjust main content for navbar height -->
    <div class="pt-16">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>