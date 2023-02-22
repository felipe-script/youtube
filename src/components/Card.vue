<template>
  <v-card class="mx-auto my-4" max-width="300">
    <v-img
      :src="item.snippet.thumbnails.medium.url"
      height="200px"
    ></v-img>
    <v-card-title> {{ item.snippet.title }} </v-card-title>
    <v-card-text>
      {{ item.snippet.description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Card",
  props: {
    item: {
      id: {
        videoId: String,
      },
      snippet: {
        title: String,
        description: String,
        thumbnails: {
          medium: {
            url: String,
            width: Number,
            height: Number,
          },
        },
      },
    },
  },
  data() {
    return {};
  },
  created() {},
};
</script>
