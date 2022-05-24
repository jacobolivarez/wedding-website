// // Load custom components
// // This is based on: https://github.com/quasarframework/quasar/blob/dev/docs/src/boot/components.js

import Page from 'src/components/Page.vue';

export default async ({ app }) => {
  app.component('Page', Page);
};
