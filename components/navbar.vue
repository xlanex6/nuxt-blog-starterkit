<template>
 <div class="flex items-center justify-center bg-teal-400 h-16">
       <nuxt-link class="hover:bg-teal-300 h-full flex items-center px-6 font-light text-white" to="/">HOME</nuxt-link>
       <nuxt-link class="hover:bg-teal-300 h-full flex items-center px-6 font-light text-white" to="/posts/">BLOG</nuxt-link>
       <nuxt-link class="hover:bg-teal-300 h-full flex items-center px-6 font-light text-white" to="/about">ABOUT</nuxt-link>
       <nuxt-link class="hover:bg-teal-300 h-full flex items-center px-6 font-light text-white" to="/contact">CONTACT</nuxt-link>
 </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
      return {
        
      }
  },
}
</script>

<style>
.nuxt-link-exact-active{
  @apply bg-teal-300
}
</style>
