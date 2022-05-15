// Load custom components
// This is based on: https://github.com/quasarframework/quasar/blob/dev/docs/src/boot/components.js

import Home from 'src/components/Home.vue';
import WhenAndWhere from 'src/components/WhenAndWhere.vue';
import FAQ from 'src/components/FAQ.vue';
import Registry from 'src/components/Registry.vue';
import RSVP from 'src/components/RSVP.vue';
import ContactUs from 'src/components/ContactUs.vue';

export default async ({ app }) => {
  app.component('Home', Home);
  app.component('WhenAndWhere', WhenAndWhere);
  app.component('FAQ', FAQ);
  app.component('Registry', Registry);
  app.component('RSVP', RSVP);
  app.component('ContactUs', ContactUs);
};
