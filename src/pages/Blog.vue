<template>
  <q-page>
    <div class="bg-how-it-works q-pa-xl">
      <h1 class="heading white-text text-center justify-center">
        {{ pagetitle }}
      </h1>
      <h2 class="banner-text white-text text-center justify-center">
        {{ bannertext }}
      </h2>
    </div>
    <div class="full-width row justify-center items-start q-pa-xl">
      <div class="col-shrink col-xs-12 col-sm-grow col-md-grow">
        <blog />
      </div>

      <!-- <div class="col-shrink col-xs-12 col-sm-3 col-md-3">
        <sidebar-menu />
      </div> -->
    </div>
  </q-page>
</template>

<script>
import Blog from "../components/blog/Blog";
import SidebarMenu from "../components/blog/SidebarMenu";

export default {
  name: "BlogPage",
  components: { SidebarMenu, Blog },
  data() {
    return {
      pagetitle: "Web Blog & Knowledge Center",
      bannertext:
        "Follow our blog and discover the latest content and trends in the market."
    };
  }
};
</script>

<style lang="scss" scoped>
.bg-how-it-works {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.77)),
    url("https://raw.githubusercontent.com/lotusms/LotusMS/master/pagebanners/blog.jpg")
      center center no-repeat;
  .banner-text {
    max-width: 1050px;
    margin: 0 auto;
  }
}
</style>
