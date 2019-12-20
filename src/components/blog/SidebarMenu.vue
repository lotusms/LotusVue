<template>
  <div class="bg-grey-2 shadow-2">
    <q-banner class="bg-primary-alt">
      <h5 class="green-text text-center q-mb-none">{{ heading }}</h5>
    </q-banner>
    <q-list separator>
      <q-item
        v-for="(blog, index) in blogs"
        :key="index"
        :to="`/${blog.url}`"
        clickable
        v-ripple
        exact
      >
        <q-item-section avatar>
          <q-avatar>
            <img
              :src="
                `https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/${blog.image}`
              "
              :alt="blog.title"
              class="avatar"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="2">{{ blog.title }}</q-item-label>
        </q-item-section>
        <q-item-section side top class="date-section">
          <q-icon size="5" name="calendar_today" color="primary" class="icon" />
          <span>{{ blog.date }}</span>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SidebarMenu",
  data() {
    return {
      heading: "Blog Archive"
    };
  },
  computed: {
    ...mapGetters("blogs", ["blogs"])
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
