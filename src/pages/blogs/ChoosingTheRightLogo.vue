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
      title: "Choosing the right logo",
      date: "01 Nov 2017",
      image: "wikipediaLogo.jpg",
      text:
        '<p>Every business starts small and usually, one of the first steps is to create a brand. This is a stressful and very important step in creating your startup business. Your logo will become part of your brand identity and it must be carefully thought through and considered. Not only for aesthetics but for many other reasons. Will your logo display in full crispiness regardless of size? Will it be legible and easy to understand? Will it support different methods of printing and display? These are all questions you should ask yourself when creating your logo. One of the greatest mistakes entrepreneurs make is overloading the logo with information and design. This makes the logo extremely busy and hard to tell what it is. Logos should capture the essence of the organization with a few details as possible.</p><h4>The Before-Thought</h4><br/><p>Before creating your logo, start with finding a meaning to your logo that identifies your brand and ties it with your organization\'s purpose or mission. For example, our logo is the lotus flower. The lotus flower strives through the hardest conditions to survive, and against all odds, it succeeds. It grows from muddy river and pond bottoms. A soil that many plants struggle to find suitable enough. Its flower head is, by ratio, too large for its stem. This alone would cause a flower to bend because of the weight. During its initial growing stages, it receives very little sunlight since the murkiness of the water blocks much of the sunlight. But despite all the roadblocks, the lotus blooms. We found this extremely interesting and meaningful. Our company\'s purpose is to provide all our clients with a fighting chance against all adversities and larger competitors. Much like the lotus, startup businesses often fail by being overwhelmed by their competition and not having the right tools or budget to market efficiently.<br/><br/> Your objective is to find what drives your company to open its doors every day. Consider the services you offer, as well as the differences between your business and your competition. And if you would like to capture a story that brought you to create your organization, see if you can implement it in the logo. Many large company logos were created from an interesting story behind it.</p><h4>Some examples</h4><br/><p>Wikipedia\'s logo offers an interesting combination of concepts that captures their entity. The logo is shaped in an Earth-like sphere thus representing their global scope across the multitude of nations. Their database contains information from all nations, cultures, and resources - even cosmic information is found in Wikipedia!<br/><br/> The puzzle pieces, as well as the missing pieces, represent that the encyclopedia is never finished, and it is constantly being updated with additional information<br/><br/>	But the most interesting concept in their logo is the language characters found within it that symbolize  multilingualism. Did you know that these characters put together spell the word "Wikipedia"? Very neat, I\'d say!<br/><br/>	FedEx, at a simple glance, looks like a very simple logo, however, there is more to it than meets the eye. Starting with the color, the blue remains true to all logo variations. It is their primary brand color, but their "Ex" changes between gray, green, red, and orange depending on their shipping method and service.</p> <ul><li>FedEx Express (Blue/Orange)</li><li>FedEx Ground (Blue/Green)</li><li>FedEx Freight (Blue/Red)</li><li>FedEx Services (Blue/Gray)</li></ul><br/> <p>However, one of the neatest aspects of the logo is the way they integrated the arrow in their logo to accentuate their motto "always moving forward"!</p><br/><br/><img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/FedEx.jpg" alt="FedEx" class=""><br/><br/><h4>Logo Design Considerations</h4><br/><p>There are a few factors to consider when making a professional logo design. Let\'s go over a few.</p><ul><li><strong>Transparent backgrounds</strong> - A logo should never have a restricting background that will define an absolute shape. This presents a problem in web design when the logo should be placed in an area where the logo should be flexible enough to be resized without overlapping the container that holds it.<br/><img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/logo-with-bg.png" class="" title="Transparent backgrounds" alt="Transparent backgrounds"></li><li><strong>Crossing lines</strong> - when designing a logo that will support other forms of display, i.e. embroidery, vinyl cutouts, wood or metal plaques, etc.; it is crucial the logo does not contain any lines where the needle or cutting tool can potentially skip or be interrupted. The cutting blades should be able to trace in and around the logo uninterruptedly. Notice in the logo below, the slobber from the warthog\'s mouth is layering on top of the logo and it would be impossible for it to be reached by a cutting blade when making  a decal.<br/><br/> <img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/teamBadEnglish.png" class="crossing-lines" title="Crossing lines" alt="Crossing liness"></li><li><strong>Colors</strong> - We suggest two to three colors. One of which resembles the primary color used on the website and one that will identify with your brand. An excessive amount of colors can make your logo hard to read or see by viewers with color blindness.</li><li><strong>Amounts of objects</strong> - The simpler, the better. Adding too many objects to the logo can make it too busy and hard to display in small sizes should you decide to promote your brand by displaying it in a small area such as complimentary pens. Consider if this is something you will do at some point. Some organizations such as Wikipedia will most likely never have the need to promote this way. Their logo, as busy as it may be, presents no complications in this area. However, let\'s use them as an example. Can you still tell the Wikipedia characters within the logo?<br/><br/> <img src="https://raw.githubusercontent.com/lotusms/LotusMS/master/blog/blog-images/pens.png" class="pens" title="Amounts of objects" alt="Amounts of objects"></li></ul><h4>Conclusion</h4><br/><p>Ensure your graphic designer is also knowledgeable in marketing concepts and brand delivery. Most graphic designers are very interested in showcasing their amazing graphic artistry. However, this may not be exactly what you need to deliver your business with a timeless and powerful brand.</p><h4>Reading Material</h4><a href="https://www.forbes.com/sites/samanthaharrington/2017/01/31/how-to-choose-the-right-logo-for-your-business/#35fcbbf3fe42" target="_blank">How To Choose The Right Logo For Your Business - by Forbes</a><br/><a href="https://brightside.me/wonder-curiosities/12-astonishing-facts-about-famous-logos-you-didnt-know-371210/?utm_source=fb_r69f33&amp;utm_campaign=15aa96fb9ac8&amp;utm_medium=cpm" target="_blank">12 Astonishing Facts About Famous Logos You Didn\'t Know - by Bright Side</a>'
    };
  }
};
</script>

<style></style>
