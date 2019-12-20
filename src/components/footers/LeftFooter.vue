<template>
  <div>
    <h5 class="green-text text-center">{{ heading }}</h5>
    <q-list dark separator>
      <q-item
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        clickable
        v-ripple
        exact
      >
        <q-item-section>{{ link.title }}</q-item-section>
      </q-item>
      <q-item v-if="!loggedIn" to="/login" clickable v-ripple exact>
        <q-item-section>Login</q-item-section>
      </q-item>
      <q-item v-else clickable v-ripple exact @click="logoutUser" to="/">
        <q-item-section>Logout</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "LeftFooter",
  data() {
    return {
      heading: "Additional Links",
      links: [
        {
          title: "FAQs",
          to: "/faqs"
        },
        {
          title: "Sales Policy",
          to: "/sales-policy"
        },
        {
          title: "Refund Policy",
          to: "/refund-policy"
        },
        {
          title: "Privacy Policy",
          to: "/privacy-policy"
        },
        {
          title: "Terms Of Use",
          to: "terms-of-use"
        }
      ]
    };
  },
  computed: {
    ...mapState("auth", ["loggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  }
};
</script>

<style lang="scss" scoped>
.footer-col {
  .green-text {
    padding-bottom: 5px;
    border-bottom: 2px solid #7cb342;
  }
}
</style>
