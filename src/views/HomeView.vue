<template>
  <div>
    <Header />
    <div class="cards-container d-flex flex-wrap">
      <Card v-for="(item, i) in getVideosItems" :key="i" :item="item"/>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    Header,
    Card,
  },
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters(["getVideosItems"]),
  },
  methods:{
    ...mapActions(["setVideosBySearch"]),
  },
  created(){
    this.setVideosBySearch('news')
  }
};
</script>

<style lang="scss" scoped>
.cards-container {
   gap: 20px;
}
</style>
