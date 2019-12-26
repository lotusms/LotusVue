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
        <p>
          The idea of marketing is to deliver a product or service to an
          intended target audience or market. Considering that most of today's
          consumers are tech-savvy and avid smartphone users, ignoring the
          importance of user experience would be marketing suicide. Recent
          studies showed that an impressive
          <a
            href="https://www.experiencedynamics.com/blog/2015/03/30-ux-statistics-you-should-not-ignore-infographic"
            target="_blank"
            >79% of mobile users</a
          >
          users admitted having abandoned a website because the one they visited
          was too hard to understand, poorly designed, too busy, or too messy to
          understand how to navigate between items or pages.
          <br />
          <br />User experience optimization is more than just an attractive
          design. Many psychological concepts are taken into consideration to
          attract the user’s attention and hack into their expected behaviors.
          Ideally, a user that is satisfied with your website is most likely to
          visit your store or shop and stay engaged with your website much
          longer. The latter increases your visibility in search engines.
        </p>
      </div>

      <h5 class="green-text text-center text-h4">Some Pointers</h5>

      <div class="full-width row wrap justify-around items-start q-pa-lg">
        <div class="col-xs-12 col-sm-8 q-pa-lg">
          <slider />
        </div>

        <div class="col-xs-12 col-sm-4 q-pa-lg">
          <sidebar />
        </div>
      </div>

      <h5 class="green-text text-center text-h4">Related Projects</h5>
    </div>

    <div
      class="bg-secondary white-text full-width row wrap justify-center items-start q-pa-lg"
    >
      <div
        class="col-xs-12 col-sm-4 q-pa-lg"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="text-center">
          <img
            :src="
              `https://raw.githubusercontent.com/lotusms/LotusMS/master/ux/${project.image}`
            "
            :alt="project.name"
          />
          <p class="pre-formatted">{{ project.text }}</p>
        </div>
      </div>
    </div>
    <div class="bg-dark">
      <reach-out />
    </div>
  </q-page>
</template>

<script>
import ReachOut from "../components/ReachOut";
import Slider from "../components/ux/Slider";
import Sidebar from "../components/ux/Sidebar";

export default {
  name: "UserExperienceOptimizationPage",
  components: { ReachOut, Slider, Sidebar },
  data() {
    return {
      pagetitle: "User Experience",
      bannertext:
        "Several surveys have demonstrated that the main reason why visitors abandon websites is poor user experience",
      heading: "Enhance Your Website's User Experience",
      projects: [
        {
          image: "captor2.png",
          name: "Captor",
          text:
            "Compartmentalization of content makes all the information easy to find. The navigational items are centralized in independent areas to make it easier for the user to find his/her way through the website. Built for indoor/office use where sun glare will not be a problem"
        },
        {
          image: "plcb2.png",
          name: "Liquor Control Board",
          text:
            "Extensive databases can result in messy navigation and convoluted menus. Making use of a full width menu allows for better distribution of information in the screen. Even when the website was not intended to be deigned for full-screen."
        },
        {
          image: "jg2.png",
          name: "JobGateway",
          text:
            "Understanding the users and their primery objective when they come to main page. The home page shows a lookup form to allow the users to perform searches and find the information they need right from the home page. The internal pages contain all the tools and extra features to configure their searches accordingly."
        }
      ]
    };
  },
  meta: {
    // sets document title
    title: "UX Optimization",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "User experience is extremely important to guarantee a user-friendly web design. Our team of designers puts a considerable amount of time in making sure your website will be a pleasant environment and encourage your users to engage with it and come back."
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
    url("https://raw.githubusercontent.com/lotusms/LotusMS/master/pagebanners/ux.jpg")
      center center no-repeat;
  .banner-text {
    max-width: 1050px;
    margin: 0 auto;
  }
}
</style>
