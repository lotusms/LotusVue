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
  name: "PrivacyPolicyPage",
  data() {
    return {
      heading: "Privacy Policy",
      site: "www.lotusmarketingsolutions.com",
      emailto:
        "m&#97;i&#108;to&#58;m&#37;61i&#108;%74%6&#70;%3&#65;lotu&#37;&#55;3&#109;s%4&#48;o&#117;%74%&#54;&#67;%6F%6&#70;k&#46;%63&#111;m",
      email: "lotusms@outlook.com",
      phone: "(717) 945-8132",
      text:
        '<h4 class="green-text">What information do we collect?</h4><p>We collect information from you when you respond to a survey.<br><br>When ordering or registering on our site, as appropriate, you may be asked to enter your name, e-mail address, phone number or name. You may, however, visit our site anonymously.</p><h4 class="green-text">What do we use your information for?</h4><p>Any of the information we collect from you may be used in one of the following ways:</p><ul class="list-indent">    <li>To personalize your experience – (your information helps us to better respond to your individual needs)</li>    <li>To process transactions</li></ul><p>    Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</p><h4 class="green-text">How do we protect your information?</h4><p>    We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.    <br><br>    We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.    <br><br>    After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.</p><h4 class="green-text">Do we use cookies?</h4><p>We do not use cookies.</p><h4 class="green-text">Do we disclose any information to outside parties?</h4><p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p><h4 class="green-text">Third party links</h4><p>Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p><h4 class="green-text">California Online Privacy Protection Act Compliance</h4><p>    Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.    <br><br>    As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at any time by logging into their control panel and going to the ‘Edit Profile’ page.</p><h4 class="green-text">Childrens Online Privacy Protection Act Compliance</h4><p>We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.</p><h4 class="green-text">Online Privacy Policy Only</h4><p>This online privacy policy applies only to information collected through our website and not to information collected offline.</p><h4 class="green-text">Terms and Conditions</h4><p>Please also visit our Terms and Conditions div establishing the use, disclaimers, and limitations of liability governing the use of our website at Terms of Use</p><h4 class="green-text">Your Consent</h4><p>By using our site, you consent to our web site privacy policy.</p><h4 class="green-text">Changes to our Privacy Policy</h4><p>If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on 06/10/2016</p><h4 class="green-text">Contacting Us</h4><p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>'
    };
  },
  meta: {
    // sets document title
    title: "Privacy Policy",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Privacy is important to every user. We have compiled a list of policies that explain how we will protect your privacy while you browse through our website. In other words, what happens in our website, stays in our website. No room for prying eyes. "
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  }
};
</script>
