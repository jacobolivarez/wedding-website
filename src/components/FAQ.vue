<template>
  <div style="border-bottom: 1px solid black;" class="outfit">
    <div class="row q-pa-lg">
      <div
        class='col fontsize-48'
      >
        <span>Frequently Asked Questions</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-card square bordered flat>
          <q-card-section
            v-for="faq in faqs"
            :key="faq.id"
          >
            <div
              class="fontsize-28 q-pb-sm"
            >
              {{ faq.question }}
            </div>
            <div class="row">
              <p
                class="fontsize-18 col-8 text-center q-pb-sm"
                style="margin: 0 auto;"
              >
                {{ faq.answer }}
              </p>
            </div>
            <q-separator />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FAQ',
  data() {
    return {
      faqs: [],
    };
  },
  mounted() {
    this.getFaqs();
  },
  methods: {
    async getFaqs() {
      const response = await this.$api.get('/faq.json');
      this.faqs = response.data;
    },
  },
};
</script>
