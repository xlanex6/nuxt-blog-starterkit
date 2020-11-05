<template>
  <div>
    unique post page
    <h1 class="mb-3">{{ post.title }}</h1>
    <nuxt-content class="prose nuxt-content" :document="post" />
  </div>
</template>

<script>
export default {
  name: "post",
  data() {
    return {};
  },
  async asyncData({ $content, params, error }) {
    const { slug } = params;
    const [post] = await $content("posts")
      .where({ slug })
      .limit(1)
      .fetch();

    if (!post) {
      error({ statusCode: 404, message: "Page not found" });
    }

    return {
      post
    };
  }
};
</script>

<style>
.markdown img {
  width: 100px;
  height: auto;
}
</style>
