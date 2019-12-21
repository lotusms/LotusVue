<template>
  <q-card class="my-card" square>
    <div class="bg-grey-2">
      <q-card-section class="blog-post">
        <h1 class="heading green-text text-h2 blog-title">{{ title }}</h1>
        <div class="text-subtitle1 date-section q-mt-none">
          <q-icon
            size="5"
            name="calendar_today"
            color="primary"
            class="icon"
          />{{ date }}
        </div>

        <img
          class="q-mb-md shadow-3"
          :src="
            `https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/full-image/${image}`
          "
          alt="Is there an ROI in buying a website?"
        />
      </q-card-section>

      <q-card-section>
        <blog-text :text="text" />
        <blog-component
          v-if="$route.path === '/is-there-an-roi-in-buying-a-website'"
        >
          <roi-chart />
        </blog-component>
        <blog-text :text="textfollow" />
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import BlogText from "./BlogText";
import BlogComponent from "./BlogComponent";
import RoiChart from "../blog/RoiChart";
export default {
  name: "BlogPost",
  components: { BlogText, BlogComponent, RoiChart },
  props: ["title", "image", "text", "date", "textfollow"],
  data() {
    return {
      component: "roichart"
    };
  }
};
</script>

<style></style>
