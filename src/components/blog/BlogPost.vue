<template>
  <q-card class="my-card" square>
    <div class="bg-grey-2">
      <q-card-section>
        <h1 class="heading green-text text-h2">{{ title }}</h1>
        <div class="text-subtitle1 date-section q-mt-none">
          <q-icon
            size="5"
            name="calendar_today"
            color="primary"
            class="icon"
          />{{ date }}
        </div>

        <img
          :src="
            `https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/full-image/${image}`
          "
          alt="Is there an ROI in buying a website?"
        />
      </q-card-section>

      <q-card-section>
        <div v-html="text"></div>
      </q-card-section>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["title", "image", "text", "date"],
  data() {
    return {};
  }
};
</script>

<style></style>
