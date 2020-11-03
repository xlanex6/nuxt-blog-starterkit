<template>
 <div>
   <ul class="flex items-center justify-center bg-teal-400 h-8">
     <li class="h-full">
       <nuxt-link class="hover:bg-teal-600 h-full px-4" to="/">HOME</nuxt-link>
     </li>
     <li class="h-full">
       <nuxt-link class="hover:bg-teal-600 h-full px-4" to="/posts/">BLOG</nuxt-link>
     </li>
     <li class="h-full">
       <nuxt-link class="hover:bg-teal-600 h-full px-4" to="/about">ABOUT</nuxt-link>
     </li>
     <li class="h-full">
       <nuxt-link class="hover:bg-teal-600 h-full px-4" to="/contact">CONTACT</nuxt-link>
     </li>
   </ul>
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
