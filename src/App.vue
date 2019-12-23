<template>
  <div id="q-app" v-if="`/blog/${blog.id}`">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Vue from "vue";
import VueResource from "vue-resource";
import MixinGetSinglePost from "./mixins/get-single-post";

Vue.use(VueResource);

export default {
  name: "App",
  mixins: [MixinGetSinglePost],
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  methods: {
    ...mapActions("auth", ["handleAuthStateChange"])
  },
  mounted() {
    this.handleAuthStateChange();
  }
};
</script>
