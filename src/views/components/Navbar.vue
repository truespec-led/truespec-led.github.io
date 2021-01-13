<template>
  <div data-collapse="small" data-animation="default" data-duration="400" class="navbar w-nav">
    <div class=" bg-transparent " style="min-height:50px;">
    <div class="container w-container" style="margin 0 auto;">
      <div class="w-full w-clearfix  py-2">
        <a href="/" class="brand w-nav-brand w--current inline-block">
          <img src="@/assets/sunlogo.png" height="55"  alt="" class="inline-block w-12 m-1">
          <div class="hidden inline-block text-xl ">TRUE SPEC</div>
       </a>

       <div class="hidden lg:inline-block  ">
         <UpperNav />
       </div>


       <div class="inline-block lg:hidden float-right p-4">

         <button @click="showResponsiveMenu=!showResponsiveMenu" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>

        <div v-if="showResponsiveMenu" class="w-full absolute left-0 block flex-grow lg:flex lg:items-center lg:w-auto bg-gray-800">
          <div class="text-sm lg:flex-grow">
             <AccordionNav />
          </div>

        </div>

       </div>

      </div>

    </div>
    </div>
  </div>
</template>


<script>
import UpperNav from './UpperNav.vue';
import AccordionNav from './AccordionNav.vue';

export default {
  name: 'Navbar',
  props: [],
  components: {UpperNav,AccordionNav},
  data() {
    return {
      showResponsiveMenu: false
    }
  },
  methods: {

  }
}
</script>
