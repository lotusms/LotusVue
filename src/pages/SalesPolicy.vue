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
  name: "SalesPolicyPage",
  data() {
    return {
      heading: "Sales Policy",
      site: "www.lotusmarketingsolutions.com",
      emailto:
        "m&#97;i&#108;to&#58;m&#37;61i&#108;%74%6&#70;%3&#65;lotu&#37;&#55;3&#109;s%4&#48;o&#117;%74%&#54;&#67;%6F%6&#70;k&#46;%63&#111;m",
      email: "lotusms@outlook.com",
      phone: "(717) 945-8132",
      text:
        '<h4 class="green-text">Payment Policy</h4><If>One-half of the initial website design and development fees are due upon project initiation. Upon project completion, the remaining balance is due in full within five business days. If the remaining balance is not paid in full by the given deadline the website will be set offline until payment is received.<br/><br/>If the balance is not paid in full 30 days after the last payment is due, the website will be considered abandoned and the files will be deleted. If you wish to retrieve the website after that time, a $250 database backup retrieval fee will be due in addition to the balance due.<br/><br/>Only after payment is paid in full and the website is completed, LOTUS Marketing Solutions will register the client’s website with Google, Yahoo, and Bing search engines.<br/><br/>Any payment for services outside of our obligations, such as: hosting, domain, or any recurring plugin is not enforced by us. Please ensure you keep up with their deadlines to avoid any downtime of your website and SEO campaign(s)<br/><br/>All monthly services such as PPC, Social Marketing, SEM &amp; SEO maintenance will be performed after payment is collected. Monthly payment will be due on the 1st of every month not to exceed the fifth day of the month. Late payments into the month will be assessed a $25 late fee for service reinstatement.<br/><br/>After 3 months late on your website\'s payment paln, your website is considered abandoned and deleted. A $250 fee plus all due charges will be required to retrieve the site. After, 6 months since the website payment stopped, the website\'s database and the project\'s files are deleted. An entirely new project would need to bve restarted if you wanted to restart a project.<br/><br/>Clients that have faulted on payment will enter a “Pay in Advance” status from that point on, and on any future transactions.<br/><br/>Clients experiencing financial hardship should contact us to discuss payment options. We will work with you.</p><h4 class="green-text">Web Maintenance Plan</h4><p>Our maintenance plan covers ONLY current content in the site. Any additions falls in the realm of new design and development and other fees apply.<br/><br/>If you opt out of this service, any maintenance on the site will be charged at a pro-rated $45/hr rate. The first hour is NOT prorated.<br/><br/>Although the maintenance plan does not bind the client to a service contract, once you choose this plan you can quit at any time but you may only re-instate it 3 months after its cancellation. For instance, if you opt for the maintenance plan to perform several changes on the site and cancel. Any subsequent changes will have to wait 3 months unless you choose to pay the hourly rate.<br/><br/>We offer monthly payment plans, trimester payment plans, and a yearly maintenance payment plan. Contact us for any details and let us know which one you are more comfortable with. Be advised, the internet updates very frequently. If you opt for a yearly maintenance, your website may be subjected to failure and a decreased quality of service.<br/><br/>The Web Maintenance Plan is not exclusive to our websites only. If you had a website done somewhere else and you wish to have it maintained by us, we will be glad to do so.</p><h4 class="green-text">Billing</h4><p>If a billing error is noticed, the client should immediately contact us. Refunds of over-payments will be made for up to a maximum of three months, so clients are urged to check billing statements regularly. Additionally, LOTUS Marketing Solutions reserves the right to bill clients for accidental under-charges for a maximum of up to three months. Refunds of more than three months will not be processed.<br/><br/>LOTUS Marketing Solutions uses PayPal as its preferred method of re-current payments. All payment processing fees are a responsibility of the client and will be added to the invoice. Notice, we do not mark up our prices to compensate for payment processing fees as other companies do. In addition, using PayPal allows you to have records of your finances in your PayPal account which can be helpful for bookkeeping and tax purposes.<br/><br/>Non-recurrent payments of $100+ can be made in check or credit card.</p><h4 class="green-text">Project Timeliness</h4><p>Every website varies in size, functionality, and content. Also, not every client is as efficient to submit all necessary content nor is it possible to guarantee that all necessary content will always be available right away. For these reasons, and others outside of our control (i.e. servers, hosting, etc.) we cannot guarantee a fixed date. Most of our websites take an average of 2 months before they are completed, yet we have done it in as little as 4 weeks. Please understand that most of it will depend on your ability to communicate with us.</p><h4 class="green-text">Website Approval</h4><p>Before your website enters the design phase, you will have one or two consults to discuss price, your needs, and your goals. At this time, we will present to you a prototype template based on information collected from you. You may or may not agree or approve to this template, as well as give us feedback regarding what you are looking for on your design.<br/><br/>Once this information has been collected and recalculated, we will present a “mock” site that will demonstrate your website’s main features, look and feel, and structure. This is your final chance to approve or disapprove. Failing to disapprove to this mock site by the 3rd day will subject it as the final product.<br/><br/>At this time, the site will be transferred to the live server and continue until it is completed.</p><div class="text-white bg-red q-py-lg q-px-md" style="margin-top:20px">    ATTENTION:    Re-designing the site after it has been approved will be subjected to a design fee of the sum of 50% of the total initial cost of project.</div><h4 class="green-text">Graphic Design</h4><p>After gathering all necessary information, LOTUS Marketing Solutions will provide three different variations to the design to choose from or combine. Effective communication is crucial in the design phase.</p><h4 class="green-text">Your Consent</h4><p>By using our site, you consent to our web site sales policy.</p><h4 class="green-text">Changes to our Sales Policies</h4><p>If we decide to change our sale policy, we will post those changes on this page. This policy was last modified on 01/10/2012</p><h4 class="green-text">Contacting Us</h4><p>If there are any questions regarding these sales policies you may contact us using the information below.</p>'
    };
  },
  meta: {
    // sets document title
    title: "Sales Policy",
    // optional; sets final title as "Index Page - LOTUS Marketing Solutions", useful for multiple level meta
    titleTemplate: title => `${title} - LOTUS Marketing Solutions`,

    // meta tags
    meta: {
      description: {
        name: "description",
        content:
          "Read through our sales policy before you hire us to build you a great web design and find out how this will affect you. We want you to feel comfortable with our terms and understand we are trying to protect your purchase and our relationship."
      },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  }
};
</script>
