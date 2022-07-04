<template>
  <q-layout view="hhh lpR fff" class="bg-image-1">
    <q-header class='text-black q-py-md'>
      <q-toolbar>
        <q-toolbar-title class="text-center greatVibes q-pa-md text-secondary">
          <span class="fontsize-48">
            Marissa & Jacob
          </span>
        </q-toolbar-title>
      </q-toolbar>
      <q-page-sticky
        position="top"
        expand
        class="bg-primary text-black"
        style="border-bottom: 1px solid black;"
      >
        <div class="gt-xs">
          <q-tabs
            v-model="tab"
            active-color='black'
            shrink
            mobile-arrows
          >
            <q-route-tab
              v-for="tab in tabs"
              :key="tab.name"
              :name="tab.name"
              :label="tab.label"
              :to="tab.url"
              align="center"
            />
          </q-tabs>
        </div>
        <div class="col lt-sm">
          <q-btn
            flat
            icon="menu"
            color="secondary"
            size="lg"
          >
            <q-menu>
              <q-list>
                <q-item
                  v-for="mobile_tab in tabs"
                  :key="mobile_tab.name"
                  v-close-popup
                  clickable
                  :to="mobile_tab.url"
                  style="min-width: 100px;"
                  active-class="text-secondary"
                >
                  <q-item-section>
                    {{ mobile_tab.label }}
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-page-sticky>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="text-black text-center">
      <q-toolbar>
        <q-toolbar-title class="text-subtitle1">
          Designed by Jacob Olivarez.
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'Wedding Website',
  data() {
    return {
      tab: 'home',
      tabs: [
        {
          name: 'home',
          label: 'Home',
          url: '/home',
        },
        {
          name: 'when_and_where',
          label: 'When & Where',
          url: 'when-and-where',
        },
        {
          name: 'faq',
          label: 'FAQ',
          url: '/faq',
        },
        {
          name: 'registry',
          label: 'Registry',
          url: '/registry',
        },
        {
          name: 'rsvp',
          label: 'RSVP',
          url: '/rsvp',
        },
        {
          name: 'contact_us',
          label: 'Contact Us',
          url: '/contact-us',
        },
      ],
    };
  },
  computed: {},
  methods: {
    handleTransition() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="sass">
@font-face
  font-family: greatVibes
  src: url(../fonts/great-vibes.woff)
.greatVibes
  font-family: 'greatVibes'
@font-face
  font-family: outfit
  src: url(../fonts/outfit.woff)
.outfit
  font-family: 'outfit'
.fontsize-18
  font-size: calc(18px + (38 - 18) * ((100vw - 300px) / (1800 - 300))) !important
.fontsize-22
  font-size: calc(22px + (46 - 22) * ((100vw - 300px) / (1800 - 300))) !important
.fontsize-28
  font-size: calc(28px + (58 - 28) * ((100vw - 300px) / (1800 - 300))) !important
.fontsize-36
  font-size: calc(36px + (74 - 36) * ((100vw - 300px) / (1800 - 300))) !important
.fontsize-48
  font-size: calc(48px + (98 - 48) * ((100vw - 300px) / (1800 - 300))) !important
.bg-image-1
  background-image: url("../assets/bgPattern.png")
  background-repeat: repeat
.bg-image-2
  background-image: url("../assets/homePage2.png")
</style>
