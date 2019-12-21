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
      title: "User Usability And User Experience",
      date: "02 Jul 2016",
      image: "UX.jpg",
      text:
        '<p>Websites are comprised of two major sections - the client side and the server side. The client side is also known as the "front end", and the server-side known as "back end". Both sides work unison to handle the website\'s  functionality. The server-side handles all the programming operations the website needs to process information. Meanwhile, the client side is what the user sees, such as images, font, color, and design layouts. User Interfacing, User Usability, and User Experience are the three front-end concepts that constitute a web design.</p><h4>User Interface</h4><p>User interface (UI) refers to the look &amp; feel given to the website by the web designer. This concept revolves around the artistic realm of the web design. Often, a web designer with graphic designing abilities builds the designs. His or her responsibilities are to create image mock-ups that demonstrate the pages\' look. This process is  also known as wireframing.</p><h4>User Usability</h4><p>Oftentimes, the graphic designer has little to no experience in front-end development languages. It is up to the front end developer to build the designs in code and give it life in a computer browser. By creating the web designs using code users are able to experience some of the behaviors on the website. e.g. page transitions, hover effects, fades, among other things.<br/> <br/> Usability ensures the website works without code errors and all elements work as expected. This includes:</p><ul>	<li>Sub menus in the navigation open as required.</li>	<li>Buttons work and have a focus, hover, and active state.</li>	<li>Hyperlinks are different than normal text in color and hover state.</li>	<li>Elements do not overlap each other.</li>	<li>Website is responsive (mobile compatible).</li>	<li>Website is consistent to all browsers.</li>	<li>And more...</li></ul><h4>User Experience</h4><p>User Experience (UX) is the psychology behind the web design process. Many refer to UX as the art of "hacking the minds of the users". A UX expert focuses on creating a web design that is easy to use and easy to understand. By understanding the user\'s expectations, a UX expert can cater to the needs of the users. Doing so reduces cognitive friction between the user and the design.<br/><br/> This process is difficult to conduct. Most clients expect the website design to meet their design preferences. In actuality, products and services, as well as the consumers or users, dictate the web design.</p><h4>Conclusion</h4><p>In summary, anyone with enough HTML and CSS experience can build a website. Others choose a DIY online system that offers free templates to build a website. Chances are, it may actually result in a nice design. Yet, this only covers the User Interfacing part. Professional experience is the most effective way to achieve User Usability and User Experience. These are the tools a website needs to enhance user engagement.</p>'
    };
  }
};
</script>

<style></style>
