<template>
  <q-page>
    <main-slide />
    <certification />
    <main-content />
    <services />
    <responsive-web-design />
    <website-types />
    <testimonials />
    <latest-work />
  </q-page>
</template>

<script>
import UIkit from "uikit";
import MainSlide from "../components/home/MainSlider";
import Certification from "../components/home/Certifications";
import MainContent from "../components/home/MainContent";
import Services from "../components/home/Services";
import ResponsiveWebDesign from "../components/home/ResponsiveWebDesign";
import WebsiteTypes from "../components/home/WebsiteTypes";
import Testimonials from "../components/home/Testimonials";
import LatestWork from "../components/home/LatestWork";

export default {
  name: "PageIndex",
  components: {
    MainSlide,
    Certification,
    MainContent,
    Services,
    ResponsiveWebDesign,
    WebsiteTypes,
    Testimonials,
    LatestWork
  },
  data() {
    return {};
  },
  meta: {
    // sets document title
    title: "Home",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Stop paying abusive amounts of money for a properly designed website. We have figured out how to provide high-end web design, amazing graphic design, and internet marketing solutions for a fraction of the cost you will find elsewhere. Let us design your website!"
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    },

    // JS tags
    script: {
      ldJson: {
        type: "application/ld+json",
        innerHTML: `{ "@context": "http://www.schema.org",
					"@type": "Organization",
					"name": "LOTUS Marketing Solutions LLC",
					"url": "https://www.lotusmarketingsolutions.com",
					"logo": "https://www.lotusmarketingsolutions.com/assets/img/2018LotusLogo.png",
					"description": "Web designers company in the Central Pennsylvania area. Local to Harrisburg, York, and Lancaster. Graphic designers and user experience experts.",
					"address": {
						"@type": "PostalAddress",
						"streetAddress": "1801 Monroe St",
						"addressLocality": "West York",
						"addressRegion": "PA",
						"postalCode": "17404",
						"addressCountry": "United States"
					},
					"contactPoint": {
						"@type": "ContactPoint",
						"telephone": "+17179458132",
						"contactType": "Sales"
					} 
				}`
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
