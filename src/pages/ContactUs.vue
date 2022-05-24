<template>
  <Page title="Contact Us">
    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-md-4 col-xs-12 offset-md-4 q-pa-sm">
        <q-card>
          <q-card-section>
            <span>
              Fill out the form below with any questions or comments
              and will we get back to you ASAP.
            </span>
          </q-card-section>
          <q-card-section>
            <q-form
              ref="contactForm"
              class="q-pa-md"
              @submit="submit"
            >
              <q-input
                v-model="name"
                outlined
                label="Name"
                :rules="[rules.required]"
              />
              <q-input
                v-model="number"
                outlined
                label="Number"
                :rules="[rules.required]"
              />
              <q-input
                v-model="email"
                outlined
                label="Email"
                :rules="[rules.required]"
              />
              <q-input
                v-model="comment"
                outlined
                label="Comment"
                :rules="[rules.required]"
                type="textarea"
              />
              <q-btn
                label="Reset"
                flat
                class="text-secondary"
                no-caps
                @click="resetForm"
              />
              <q-btn
                type="submit"
                label="Submit"
                flat
                no-caps
                class="bg-secondary text-white"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </Page>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      name: null,
      number: null,
      email: null,
      comment: null,
      rules: {
        required(val) { return !!val || 'This field is required.'; },
      },
    };
  },
  methods: {
    async submit() {
      this.$q.loading.show();
      try {
        const params = {
          guests_attending: this.guestCount || 0,
          rsvp: this.rsvp.id,
          date_updated: (new Date()).toLocaleString(),
        };
        const response = await this.$api.post('/contact.json', params);
        if (response.status === 200) {
          this.$q.notify({
            message: 'Contact submitted.',
            color: 'positive',
            position: 'top',
          });
        }
        this.resetForm();
      } catch (error) {
        console.log('error', error);
        this.$q.loading.hide();
        this.$q.notify({
          message: 'Contact unsuccessful. Please try again.',
          color: 'negative',
          position: 'top',
        });
      }
    },
    resetForm() {
      this.name = null;
      this.number = null;
      this.email = null;
      this.comment = null;
      this.$refs.contactForm.reset();
    },
  },
};
</script>
