<template>
  <div class="px-4 mt-32">
    <h1>
      COLLECTION
    </h1>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="post.slug">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {};
  },
  async asyncData({ $content, error }) {
    const posts = await $content("posts").fetch();
    if (posts.length === 0) {
      error({ statusCode: 404, message: "Page not found" });
    }
    return { posts };
  }
};
</script>
