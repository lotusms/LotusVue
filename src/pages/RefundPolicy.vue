<template>
  <q-page>
    <div class="q-pa-md full-width full-height column">
      <div class="q-pa-xl">
        <h1
          class="heading text-secondary bottom-border text-center justify-center"
        >
          {{ heading }}
        </h1>
        <p class="pre-formatted" v-html="text"></p>
        <p>
          <a href="/contact">{{ site }}</a>
        </p>
        <p>
          <a rel="noindex, nofollow" :href="emailto">{{ email }}</a>
        </p>
        <p>Phone: {{ phone }}</p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "RefundPolicyPage",
  data() {
    return {
      heading: "Refund Policy",
      site: "www.lotusmarketingsolutions.com",
      emailto:
        "m&#97;i&#108;to&#58;m&#37;61i&#108;%74%6&#70;%3&#65;lotu&#37;&#55;3&#109;s%4&#48;o&#117;%74%&#54;&#67;%6F%6&#70;k&#46;%63&#111;m",
      email: "lotusms@outlook.com",
      phone: "(717) 945-8132",
      text:
        '<h4 class="green-text">Web Design &amp; Graphic Design</h4><p>Payments for custom design projects are made to us in two installments. Once a payment or deposit is made, it is non-refundable. If a project is cancelled or postponed, all monies paid are retained by LOTUS Marketing Solutions LLC, and if applicable, a fee for all work completed beyond what was already paid for shall be paid by the client.</p><h4 class="green-text">Search Engine Optimization, Internet Marketing and Social Media Optimization</h4><p>Payments for Search Engine Optimization, Internet Marketing and Social Media Optimization services are nonrefundable, and LOTUS Marketing Solutions LLC does not issue pro-rate refunds for fees paid in advance. Once a payment or deposit is made, it is non-refundable. All set-up fees are nonrefundable as it is applied to costs immediately incurred by LOTUS Marketing Solutions LLC in initiating services. If a project is cancelled or postponed, all monies paid are retained by LOTUS Marketing Solutions LLC and if applicable, a fee for all work completed beyond what was already paid for shall be paid by the client.<br/><br/>LOTUS Marketing Solutions will do numerous modifications to the design while in mock stage to guarantee 100% satisfaction.</p><h4 class="green-text">Your Consent</h4><p>By using our site, you consent to our web site sales and refund policy.</p><h4 class="green-text">Changes to our Sales and Refund Policies</h4><p>If we decide to change our sales and refund policy, we will post those changes on this page. This policy was last modified on 01/10/2012</p><h4 class="green-text">Contacting Us</h4><p>If there are any questions regarding this sales and refund policies you may contact us using the information below.</p>'
    };
  },
  meta: {
    // sets document title
    title: "Refund Policy",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Given the nature of our services, our refund policy is very unique. Learn how this will affect you before you hire us to build a beautiful web design, brand identity, or optimize your current website."
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  }
};
</script>
