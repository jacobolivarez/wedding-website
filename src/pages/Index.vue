<template>
  <q-layout view="hhh lpR fff">
    <q-header class='text-black'>
      <q-toolbar>
        <q-toolbar-title class="text-center greatVibes q-pa-md text-secondary">
          <span class="lt-sm text-h4">
            Jacob & Marissa
          </span>
          <span class="gt-xs text-h2">
            Jacob & Marissa
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
            <q-tab
              v-for="tab in tabs"
              :key="tab.name"
              :name="tab.name"
              :label="tab.label"
              align="center"
            />
          </q-tabs>
        </div>
        <div class="col lt-sm">
          <q-btn
            flat
            icon="menu"
            color="secondary"
          >
            <q-menu>
              <q-list>
                <q-item
                  v-for="mobile_tab in tabs"
                  :key="mobile_tab.name"
                  v-close-popup
                  clickable
                  style="min-width: 100px;"
                  @click="tab = mobile_tab.name"
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
      <q-tab-panels
        v-model="tab"
        keep-alive
        animated
        class="q-pt-xl text-center bg-image-1"
        @transition="() => {
          handleTransition();
        }"
      >
        <q-tab-panel
          name="home"
          class="q-pa-none"
        >
          <Home />
        </q-tab-panel>
        <q-tab-panel
          name="when_and_where"
          class="q-pa-none"
        >
          <WhenAndWhere />
        </q-tab-panel>
        <q-tab-panel
          name="faq"
          class="q-pa-none"
        >
          <FAQ />
        </q-tab-panel>
        <q-tab-panel
          name="registry"
          class="q-pa-none"
        >
          <Registry />
        </q-tab-panel>
        <q-tab-panel
          name="rsvp"
          class="q-pa-none"
        >
          <RSVP />
        </q-tab-panel>
        <q-tab-panel
          name="contact_us"
          class="q-pa-none"
        >
          <ContactUs />
        </q-tab-panel>
      </q-tab-panels>
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
        },
        {
          name: 'when_and_where',
          label: 'When & Where',
        },
        {
          name: 'faq',
          label: 'FAQ',
        },
        {
          name: 'registry',
          label: 'Registry',
        },
        {
          name: 'rsvp',
          label: 'RSVP',
        },
        {
          name: 'contact_us',
          label: 'Contact Us',
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
  font-family: lobster2
  src: url(../fonts/lobster2.woff)
.lobster2
  font-family: 'lobster2'
@font-face
  font-family: outfit
  src: url(../fonts/outfit.woff)
@font-face
  font-family: concert-one
  src: url(../fonts/concert-one.woff)
.concert-one
  font-family: 'concert-one'
@font-face
  font-family: saira-condensed
  src: url(../fonts/saira-condensed.woff)
.saira-condensed
  font-family: 'saira-condensed'
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
  background-image: url("../assets/bgPattern3.png")
  background-repeat: repeat
</style>
