<template>
  <div>unique post page

  <h1 class="mb-3">{{post.title}}</h1>
  <nuxt-content  class="nuxt-content prose" :document="post"/>

  </div>
</template>

<script>
export default {
  name: "post",
  data() {
      return {
        
      }
  },
  async asyncData({$content, params}) {
    const {slug} = params
    const posts = await $content('posts').where({slug}).fetch()
      const post = posts[0]
    return {
      post
    }
  }
}
</script>

<style>
.markdown img {
  width: 100px;
  height: auto;
}
</style>
