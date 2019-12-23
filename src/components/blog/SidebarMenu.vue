<template>
  <div class="bg-grey-2 shadow-2">
    <q-banner class="bg-primary-alt">
      <h5 class="green-text text-center q-mb-none">{{ heading }}</h5>
    </q-banner>
    <q-list separator>
      <q-item
        v-for="(blog, index) in blogs"
        :key="index"
        :to="`/blog/${blog.id}`"
        @click="goto"
        clickable
        v-ripple
        exact
      >
        <q-item-section avatar>
          <q-avatar>
            <img :src="blog.thumb" :alt="blog.title" class="avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="2">{{ blog.title }}</q-item-label>
        </q-item-section>
        <q-item-section side top class="date-section">
          <q-icon size="5" name="calendar_today" color="primary" class="icon" />
          <span>{{ blog.date | niceDate }}</span>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import MixinGetPosts from "../../mixins/get-posts";
import { date } from "quasar";

export default {
  name: "SidebarMenu",
  mixins: [MixinGetPosts],
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM Do, YYYY");
    }
  },
  data() {
    return {
      heading: "Blog Archive",
      blogs: []
    };
  },
  methods: {
    goto() {
      this.$router.go();
    }
  }
};
</script>

<style lang="scss" scoped>
.date-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  .avatar {
    border: 2px solid $accent;
    img {
      border: 2px solid $accent;
    }
  }
  .icon {
    font-size: 12px;
    margin-right: 5px;
  }
  span {
    font-size: 13px;
  }
}
</style>
