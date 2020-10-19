<template>
  <div id="app" class="antialiased text-gray-900 flex flex-col min-h-screen bg-gray-200">
    <router-view class="flex-1"/>


    <Footer />



  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

</style>

<script>
 import Footer from './views/Footer.vue'


export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
