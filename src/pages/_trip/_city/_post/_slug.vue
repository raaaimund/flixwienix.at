<template>
  <div>
    <ul>
      <li v-for="post in availablePosts" :key="post.attributes.title">{{ post.attributes.title }}</li>
    </ul>
    <div class="content" v-html="post.html"></div>
  </div>
</template>

<script>
export default {
  layout: "default",
  async asyncData({ params }) {
    const availableMarkdownFiles = await require.context(
      "~/content/",
      true,
      /\.md$/
    );
    const post = await import(
      `~/content/${params.trip}/${params.city}/${params.post}.md`
    );
    let availablePosts = await availableMarkdownFiles
      .keys()
      .map(key => ({
        ...availableMarkdownFiles(key),
        path: `/${key.replace(".md", "").replace("./", "")}`
      }))
      .filter(
        post =>
          post.attributes.city === params.city &&
          post.attributes.trip === params.trip
      );
    return {
      trip: params.trip,
      city: params.city,
      post: params.post,
      availablePosts: availablePosts,
      post: post
    };
  }
};
</script>