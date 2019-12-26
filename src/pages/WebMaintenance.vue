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
    <div class="q-pa-md">
      <div>
        <h1
          class="heading text-secondary bottom-border text-center justify-center"
        >
          {{ heading }}
        </h1>
        <p>{{ text }}</p>
      </div>

      <h5 class="green-text text-center text-h4">Our Maintenance Packages</h5>
    </div>

    <div class="bg-dark q-pa-xl">
      <price-table />
    </div>
  </q-page>
</template>

<script>
import ReachOut from "../components/ReachOut";
import PriceTable from "../components/web-maintenance/PriceTable";

export default {
  name: "WebMaintenancePage",
  components: { ReachOut, PriceTable },
  data() {
    return {
      pagetitle: "Web Maintenance Services",
      bannertext:
        "The last thing you'd want to do is walk away from the things you love doing to update your website...and it will need it",
      heading: "No News Is Good News",
      text:
        "Contrary to widespread belief, websites are not self-sustained. Much like any other technology, they need to be updated. Code becomes obsolete, browsers are constantly updating, search engines are a moving target, coding languages are releasing new versions, and the list goes on. Not to mention, your website can become a victim of a security breach and used for spamming, phishing, illegal online activity re-routing, and more severe issues that no one would like to deal with. \n\n By choosing one of our web maintenance packages (after your website is designed and live), you can enjoy some peace of mind. As the heading above states, “No News is Good News.” This is the kind of service you pay to avoid dealing with your site problems. And quite frankly, you couldn’t hire an employee to do this work for $60 - $170 a month! We know…, we are cheap, aren’t we?"
    };
  },
  meta: {
    // sets document title
    title: "Web Maintenance",
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Technology advances and also decays over time. Every web design eventually becomes stale or fails. Our maintenance packages are there to ensure we maintain your site fresh, functional and secured. And the day you want to re-design it, you get a discount!"
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-how-it-works {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.77)),
    url("https://raw.githubusercontent.com/lotusms/LotusMS/master/pagebanners/web-maintenance.jpg")
      center center no-repeat;
  .banner-text {
    max-width: 1050px;
    margin: 0 auto;
  }
}
</style>
