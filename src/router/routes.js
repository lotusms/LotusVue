
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      
      { path: '/web-design', component: () => import('pages/WebDesign.vue') },
      { path: '/graphic-design', component: () => import('pages/GraphicDesign.vue') },
      { path: '/user-experience-optimization', component: () => import('pages/UserExperienceOptimization.vue') },
      { path: '/social-network-optimization', component: () => import('pages/SocialNetworkOptimization.vue') },
      { path: '/web-maintenance', component: () => import('pages/WebMaintenance.vue') },
     
      { path: '/how-it-works', component: () => import('pages/HowItWorks.vue') },
      { path: '/blog', component: () => import('pages/Blog.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
     
      { path: '/faqs', component: () => import('pages/FAQs.vue') },
      { path: '/sales-policy', component: () => import('pages/SalesPolicy.vue') },
      { path: '/refund-policy', component: () => import('pages/RefundPolicy.vue') },
      { path: '/privacy-policy', component: () => import('pages/PrivacyPolicy.vue') },
      { path: '/terms-of-use', component: () => import('pages/TermsOfUse.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
