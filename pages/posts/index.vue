<template>
  <div class="mt-32 px-4">
    <h1>
    COLLECTION
    </h1>
    <ul>
      <li v-for="post in posts" :key="post.slug">


          <nuxt-link :to="post.slug">
        {{post.title}}
          </nuxt-link>
        

        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
      return {
        
      }
  },
  async asyncData({$content}) {
    const posts = await $content('posts').fetch()
    return {posts}
  }

}
</script>
