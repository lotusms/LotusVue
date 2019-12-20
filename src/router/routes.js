const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },

      { path: "/web-design", component: () => import("pages/WebDesign.vue") },
      {
        path: "/graphic-design",
        component: () => import("pages/GraphicDesign.vue")
      },
      {
        path: "/user-experience-optimization",
        component: () => import("pages/UserExperienceOptimization.vue")
      },
      {
        path: "/social-network-optimization",
        component: () => import("pages/SocialNetworkOptimization.vue")
      },
      {
        path: "/web-maintenance",
        component: () => import("pages/WebMaintenance.vue")
      },

      {
        path: "/how-it-works",
        component: () => import("pages/HowItWorks.vue")
      },
      { path: "/blog", component: () => import("pages/Blog.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/contact", component: () => import("pages/Contact.vue") },

      { path: "/faqs", component: () => import("pages/FAQs.vue") },
      {
        path: "/sales-policy",
        component: () => import("pages/SalesPolicy.vue")
      },
      {
        path: "/refund-policy",
        component: () => import("pages/RefundPolicy.vue")
      },
      {
        path: "/privacy-policy",
        component: () => import("pages/PrivacyPolicy.vue")
      },
      {
        path: "/terms-of-use",
        component: () => import("pages/TermsOfUse.vue")
      },

      {
        path: "/is-there-an-roi-in-buying-a-website",
        component: () => import("pages/blogs/IsThereAnRoiInBuyingAWebsite.vue")
      },
      {
        path: "/choosing-the-right-logo",
        component: () => import("pages/blogs/ChoosingTheRightLogo.vue")
      },
      {
        path: "/confirmation-dialogs",
        component: () => import("pages/blogs/ConfirmationDialogs.vue")
      },
      {
        path: "/content-validation",
        component: () => import("pages/blogs/ContentValidation.vue")
      },
      {
        path: "/how-much-is-a-website",
        component: () => import("pages/blogs/HowMuchIsAWebsite.vue")
      },
      {
        path: "/removing-the-hashtag-in-angular",
        component: () => import("pages/blogs/RemovingTheHashtagInAngular.vue")
      },
      {
        path: "/user-usability-and-user-experience",
        component: () =>
          import("pages/blogs/UserUsabilityAndUserExperience.vue")
      },
      {
        path: "/using-images-on-a-website",
        component: () => import("pages/blogs/UsingImagesOnAWebsite.vue")
      },

      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/create-blog", component: () => import("pages/CreateBlog.vue") }
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
