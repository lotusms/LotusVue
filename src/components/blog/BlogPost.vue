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
          />{{ date | niceDate }}
        </div>

        <img
          class="q-mb-md shadow-3"
          :src="image"
          alt="Is there an ROI in buying a website?"
        />
      </q-card-section>

      <q-card-section>
        <blog-text :text="text" />
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
import BlogText from "./BlogText";
import BlogComponent from "./BlogComponent";
import RoiChart from "../blog/RoiChart";
import { date } from "quasar";
export default {
  name: "BlogPost",
  components: { BlogText, BlogComponent, RoiChart },
  props: ["title", "image", "text", "date", "textfollow"],
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM Do, YYYY");
    }
  },
  data() {
    return {
      component: "roichart"
    };
  }
};
</script>

<style></style>
