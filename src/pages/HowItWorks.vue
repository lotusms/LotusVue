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
    <div class="q-pa-xl full-width full-height column">
      <p>
        Our process is simple and most of all, effective! To pinpoint the web
        design accurately, we implement an agile system that allows us to gather
        information, design, and develop in a matter that clients will be able
        to understand the website or business solution as it grows. The process
        involves the client's input and feedback to ensure we are delivering the
        designs according to the business rules and demands.
        <br />
        <br />The web design and development takes shape in a dedicated test
        server. This allows us to design without causing any interruptions to
        the current website the client may have in place. Startup clients
        without a website will follow the same process so that their end users
        do not land accidentally on a website that is not finished.
      </p>
    </div>
    <timeline />
    <web-maintenance-banner />
    <div class="bg-dark">
      <reach-out />
    </div>
  </q-page>
</template>

<script>
import Timeline from "../components/how-it-works/Timeline";
import WebMaintenanceBanner from "../components/how-it-works/WebMaintenanceBanner";
import ReachOut from "../components/ReachOut";

export default {
  name: "HowItWorksPage",
  components: { Timeline, WebMaintenanceBanner, ReachOut },
  data() {
    return {
      pagetitle: "Web Design Project Process",
      bannertext:
        "Starting your project with us is simple and transparent. You will be able to monitor the process and see your website grow while we give it shape."
    };
  },
  meta: {
    // sets document title
    title: "How it works",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Designing your website is a fairly complex process if it is done right. Everything is carefully calculated and designed. Find out how you can be involved in your web design process and be aware of where your project stands until it is delivered."
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
    url("https://raw.githubusercontent.com/lotusms/LotusMS/master/pagebanners/howitworks.jpg")
      center center no-repeat;
  .banner-text {
    max-width: 1050px;
    margin: 0 auto;
  }
}
</style>
