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

      <h5 class="green-text text-center text-h4">Case Study</h5>

      <div class="row wrap justify-center items-start content-start">
        <div class square v-for="(card, index) in cards" :key="index">
          <q-card class="my-card dark q-ma-lg" style>
            <div class="ms-thumbnail ms-thumbnail-diagonal">
              <img
                :src="
                  `https://raw.githubusercontent.com/lotusms/LotusMS/master/social-network-marketing/${card.image}`
                "
                :alt="card.title"
              />
              <figcaption class="ms-thumbnail-caption text-center">
                <div class="ms-thumbnail-caption-content">
                  <h5 class="green-text ms-thumbnail-caption-title">
                    {{ card.title }}
                  </h5>
                </div>
              </figcaption>
            </div>
            <div>
              <q-card-section class="bg-dark white-text">
                <h5 class="green-text text-center">{{ card.title }}</h5>
                <ul>
                  <li v-for="property in card.properties" :key="property.id">
                    {{ property }}
                  </li>
                </ul>
                <div class="text-center">
                  <small>{{ card.footnote }}</small>
                </div>
              </q-card-section>
            </div>
          </q-card>
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

export default {
  name: "SocialNetworkOptimizationPage",
  components: { ReachOut },
  data() {
    return {
      pagetitle: "Stay Connected",
      bannertext:
        "In a world flooded with social media interaction, the way you present your brand and product to the world matters more than you know",
      heading: "Tap Into The Social Networks",
      text:
        "Most of today’s generations are involved in some social network activity. Very similar to Facebook, other social networks act as a conduit to establish business relations and marketing links among organizations and prospect clients. While developing a website with enormous potential to rank high in the most current search engines, being able to market properly in social networks is equally, if not more, important and necessary. \n\n By optimizing your website to social networks, you will be able to share your website, or parts of your website, with the right promotional image, contact information, and content. Allow the website the register analytics that can be measured to gauge traffic. And standardize the social networks' profiles to match your website design.",
      cards: [
        {
          title: "Sharing",
          image: "social1.jpg",
          properties: [
            "Custom brand integration",
            "Business information",
            "Promotional blurb",
            "Code verified by Facebook Developer"
          ],
          footnote: ""
        },
        {
          title: "Profile Design",
          image: "social2.jpg",
          properties: [
            "Custom profile images",
            "Custom profile covers",
            "Integration to network frameworks",
            "Link to website"
          ],
          footnote: ""
        },
        {
          title: "Analytics",
          image: "social3.jpg",
          properties: [
            "Social Network analytics*",
            "Analytics monitoring*",
            "Social campaigns*"
          ],
          footnote: "* Some require a monthly service agreement"
        }
      ]
    };
  },
  meta: {
    // sets document title
    title: "Social Network Optimization",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "The world is highly engaged in social networks and this is something you can't afford to ignore. Simply creating a Facebook page is not enough. We can help you synchronize your web design with your social networks to strengthen your brand identity."
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
    url("https://raw.githubusercontent.com/lotusms/LotusMS/master/pagebanners/social-network.jpg")
      center center no-repeat;
  .banner-text {
    max-width: 1050px;
    margin: 0 auto;
  }
}
</style>
