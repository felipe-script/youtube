<template>
  <v-container fluid>
    <v-row no-gutters class="pt-2">
      <v-col cols="10" sm="3">
        <v-img
          class="mb-6 mr-2"
          max-height="150"
          max-width="150"
          :src="require('../assets/logo-youtube-text.png')"
        ></v-img>
      </v-col>
      <v-col cols="5" sm="3">
        <v-autocomplete
          v-model="select"
          :items="storedSearches"
          :search-input.sync="search"
          class="mx-4"
          hide-no-data
          hide-details
          label="Search for a video"
          solo
        ></v-autocomplete>
      </v-col>
      <v-col cols="2" sm="2">
        <v-btn elevation="2" class="mt-1 ml-2" @click="searchVideo"
          >SEARCH</v-btn
        >
      </v-col>
      <v-col cols="3" sm="3" class="ml-10">
        <a class="blue--text lighten-1 font-weight-medium" href="#"
          >Create Account</a
        >
        <span class="black--text font-weight-bold"> or </span>
        <a class="blue--text lighten-1 font-weight-medium" href="#"> Sign-In</a>
      </v-col>
    </v-row>
    <v-row justify="center" class="d-flex flex-column flex-sm-row">
      <v-col cols="4">
        <ul class="menu-header d-flex font-weight-medium">
          <li>Home</li>
          <li>Videos</li>
          <li>Channels</li>
        </ul>
      </v-col>
      <v-col cols="4">
        <ul class="menu-header d-flex font-weight-medium">
          <li>Suscriptions</li>
          <li>History</li>
          <li>Upload</li>
        </ul>
      </v-col>
    </v-row>
    <v-divider class="mt-6"></v-divider>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      select: null,
      search: "",
    };
  },
  computed: {
    storedSearches: function () {
      return this.$store.state.storedSearches;
    },
  },
  methods: {
    ...mapActions(["setVideosBySearch"]),
    searchVideo() {
      this.setVideosBySearch(this.search);
      this.select = this.search;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.menu-header {
  gap: 10px;
  list-style-type: none;
  li {
    cursor: pointer;
  }
}
</style>
