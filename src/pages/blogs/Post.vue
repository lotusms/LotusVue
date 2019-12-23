<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="full-width row wrap justify-start items-start">
        <div class="col-xs-12 col-md-8">
          <div class="q-ma-md">
            <blog-post
              :title="blog.title"
              :date="blog.date"
              :image="blog.image"
              :text="blog.text"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="q-ma-md">
            <sidebar-menu />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";
import SidebarMenu from "../../components/blog/SidebarMenu";
import BlogPost from "../../components/blog/BlogPost";
import MixinGetSinglePost from "../../mixins/get-single-post";
Vue.use(VueResource);

export default {
  name: "BlogPage",
  components: {
    SidebarMenu,
    BlogPost
  },
  mixins: [MixinGetSinglePost],
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  }
};
</script>

<style></style>
