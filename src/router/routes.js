const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/home' },
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'when-and-where', component: () => import('pages/WhenAndWhere.vue') },
      { path: 'faq', component: () => import('pages/FAQ.vue') },
      { path: 'registry', component: () => import('pages/Registry.vue') },
      { path: 'rsvp', component: () => import('pages/RSVP.vue') },
      { path: 'contact-us', component: () => import('pages/ContactUs.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
