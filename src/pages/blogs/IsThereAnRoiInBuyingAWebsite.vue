<template>
  <q-page>
    <div class="q-pa-xl">
      <div class="full-width row wrap justify-start items-start">
        <div class="col-xs-12 col-md-8">
          <div class="q-ma-md">
            <blog-post
              :title="title"
              :date="date"
              :image="image"
              :text="text"
              :textfollow="textfollow"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-4">
          <div class="q-ma-md">
            <sidebar-menu />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import SidebarMenu from "../../components/blog/SidebarMenu";
import BlogPost from "../../components/blog/BlogPost";
export default {
  name: "BlogPage",
  components: {
    SidebarMenu,
    BlogPost
  },
  data() {
    return {
      title: "Is there an ROI in buying a website?",
      date: "23 Nov 2018",
      image: "roi.jpg",
      text:
        "<h4>What is ROI?</h4><p>The term ROI is commonly mentioned in many business models. It is an acronym for Return On Investment. A goal in which a measure is calculated to decide whether an investment will bring a positive or negative return as an outcome from an investment. In plain words, when you invest an amount of money, you would expect a profit from that investment. However, it doesn’t always work that way. Sometimes an investment results in a loss. The most successful business and enterprises analyze these returns constantly to determine whether to continue investing or abandon the venture. Truth is, there is never a guarantee on any investment. There are ways to analyze data from research to determine if an investment could potentially generate a positive return, however, it is always a case-by-case situation.</p><h4>The Costs</h4><p>Website pricing differs on many factors. Ranging from free by way of DIY website builders to millions of dollars from a digital agency. See below.</p>",
      textfollow:
        '<p>While free sounds very tempting, keep in mind that the actual return from a website is generated from the conversions it creates, rather than from its appearance. In other words, even if you have an eye for design, you may be a stranger to many concepts of User Experience and Digital Marketing that are used to "hack the mind of the users".<br /><br /> The next best alternative to free is to hire a freelancer. A freelancer is an independent contractor that often runs a lower level business. Many freelancers possess amazing skills and have very low overhead. Most work from home and in the case of web design, they have a very small operating budget which allows them to provide lower prices. On the other hand, they are not the most suitable option to take on large projects or projects that require a large variety of skillsets.<br /><br />At the furthest end of the spectrum, you can find large digital agencies. These agencies are well structured and have many professionals in their hire focused to work in a specific area of your website: designers, developers, database managers, network managers, content writers, customer support, and more. The downside reflects on their price tag. Because they have a larger overhead, specifically in their payroll department, they are forced to offer higher prices. </p> <h4>Where Do I Fit?</h4><p>In the middle, you will find a plethora of web design firms that offer great services and a more comfortable cost of investment. It really depends on who would be willing to offer the most for your money without sacrificing the most important requirements you are seeking. We estimate two comfort zones to provide you with some guidance (see chart above).<br /><br /><span style="font-style: italic; font-weight: 500;">Comfort Zone 1</span> is more fitting for a small company or business exploring digital marketing for the first time, a low marketing budget, or a company who doesn\'t rely heavily on an internet presence. Be aware, that although most of your client base is not online, in a technology world, a professional website is almost expected from serious businesses. <br /><br /> <span style="font-style: italic; font-weight: 500;">Comfort Zone 2</span> is more suitable for experienced business owners with a heavier interest or dependency on internet traffic. These business models often perform online transactions, capture leads, or have an attentive niche tracking their moves. The option to create ROI directly from the website or by means of attracting customers to their doorstep is a different discussion.</p><h4>How is ROI created?</h4><p>It all starts with a conversion goal. Depending on your business, your main goal can be to generate sales, create leads, increase traffic, et cetera. Communicate with your agency to explain what you expect to return from your website investment. If you own a retail company, you may be interested in a monetary return from your investment. This is a different return from someone who is interested in increasing their website popularity in their industry. The return for someone looking to generate more traffic reflects on more phone calls or a more prevalent presence in search engine results. It is important to know your expectations are realistic and know that building a great landing page may not necessarily create sales and an e-commerce website may not improve your marketing value.</p><h4>Our Suggestions</h4> <p>It is recommended that you start small especially if this is a new journey for you. There are many unknowns and you will be going through many "trial and error" situations during the first year. Avoid the DIY route. It will only set you up for failure and it will remove all confidence that a website could be a good investment. Talk to your web design agency about any low initial cost with a higher building capacity. This allows you to build on your smaller website as you grow and as the need arises.</p>'
    };
  }
};
</script>

<style></style>
