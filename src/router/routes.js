import Layout from "layouts/Layout.vue";
import Home from "pages/Index.vue";
import WebDesign from "pages/WebDesign.vue";
import GraphicDesign from "pages/GraphicDesign.vue";
import UserExperienceOptimization from "pages/UserExperienceOptimization.vue";
import SocialNetworkOptimization from "pages/SocialNetworkOptimization.vue";
import WebMaintenance from "pages/WebMaintenance.vue";
import HowItWorks from "pages/HowItWorks.vue";
import Blog from "pages/Blog.vue";
import About from "pages/About.vue";
import Contact from "pages/Contact.vue";
import FAQs from "pages/FAQs.vue";
import SalesPolicy from "pages/SalesPolicy.vue";
import RefundPolicy from "pages/RefundPolicy.vue";
import PrivacyPolicy from "pages/PrivacyPolicy.vue";
import TermsOfUse from "pages/TermsOfUse.vue";
import IsThereAnRoiInBuyingAWebsite from "pages/blogs/IsThereAnRoiInBuyingAWebsite.vue";
import ChoosingTheRightLogo from "pages/blogs/ChoosingTheRightLogo.vue";
import ConfirmationDialogs from "pages/blogs/ConfirmationDialogs.vue";
import ContentValidation from "pages/blogs/ContentValidation.vue";
import HowMuchIsAWebsite from "pages/blogs/HowMuchIsAWebsite.vue";
import RemovingTheHashtagInAngular from "pages/blogs/RemovingTheHashtagInAngular.vue";
import UserUsabilityAndUserExperience from "pages/blogs/UserUsabilityAndUserExperience.vue";
import UsingImagesOnAWebsite from "pages/blogs/UsingImagesOnAWebsite.vue";
import LoginPage from "pages/LoginPage.vue";
import CreateBlog from "pages/CreateBlog.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", component: Home },
      { path: "/web-design", component: WebDesign },
      { path: "/graphic-design", component: GraphicDesign },
      {
        path: "/user-experience-optimization",
        component: UserExperienceOptimization
      },
      {
        path: "/social-network-optimization",
        component: SocialNetworkOptimization
      },
      { path: "/web-maintenance", component: WebMaintenance },
      { path: "/how-it-works", component: HowItWorks },
      { path: "/blog", component: Blog },
      { path: "/about", component: About },
      { path: "/contact", component: Contact },
      { path: "/faqs", component: FAQs },
      { path: "/sales-policy", component: SalesPolicy },
      { path: "/refund-policy", component: RefundPolicy },
      { path: "/privacy-policy", component: PrivacyPolicy },
      { path: "/terms-of-use", component: TermsOfUse },
      {
        path: "/is-there-an-roi-in-buying-a-website",
        component: IsThereAnRoiInBuyingAWebsite
      },
      { path: "/choosing-the-right-logo", component: ChoosingTheRightLogo },
      { path: "/confirmation-dialogs", component: ConfirmationDialogs },
      { path: "/content-validation", component: ContentValidation },
      { path: "/how-much-is-a-website", component: HowMuchIsAWebsite },
      {
        path: "/removing-the-hashtag-in-angular",
        component: RemovingTheHashtagInAngular
      },
      {
        path: "/user-usability-and-user-experience",
        component: UserUsabilityAndUserExperience
      },
      { path: "/using-images-on-a-website", component: UsingImagesOnAWebsite },
      { path: "/login", component: LoginPage },
      { path: "/create-blog", component: CreateBlog }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
