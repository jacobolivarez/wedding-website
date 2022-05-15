<template>
  <div style="border-bottom: 1px solid black;" class="outfit">
    <div class="row q-pa-lg">
      <div
        class='col fontsize-48 q-py-md'
      >
        <span>RSVP</span>
      </div>
    </div>
    <div class="fit row wrap justify-start items-start content-start">
      <div class="col-md-4 col-xs-12 offset-md-4 q-pa-sm">
        <q-card>
          <q-card-section>
            <span>
              To submit an RSVP, select your name and whether or not you are attending.
              If attending, a dropdown for selecting your allowed guests will appear.
            </span>
          </q-card-section>
          <q-card-section>
            <q-form
              ref="rsvpForm"
              class="q-pa-md"
              @submit="submit"
            >
              <q-select
                v-model="guest"
                :options="guests"
                option-label="name"
                option-value="id"
                behavior="menu"
                use-input
                clearable
                label="Name"
                outlined
                class="q-py-md"
                color="secondary"
                :rules="[rules.required]"
                @filter="guestsFilter"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                v-model="attending"
                :options="[{id: '0', name: 'No'},{id: '1', name: 'Yes'}]"
                option-label="name"
                option-value="id"
                behavior="menu"
                clearable
                label="Attending"
                outlined
                class="q-py-md"
                color="secondary"
                :rules="[rules.required]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <q-select
                v-if="attending?.id === '1'"
                multiple
                use-chips
                behavior="menu"
                v-model="selectedGuests"
                :options="allowedGuests"
                clearable
                label="Selected Guests"
                outlined
                class="q-py-md"
                color="secondary"
                :rules="[rules.required]"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
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
                class="bg-secondary text-white"
                no-caps
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RSVP',
  data() {
    return {
      guests: [],
      guest: null,
      attending: null,
      guestCount: null,
      rsvp: 1,
      selectedGuests: [],
      rules: {
        required(val) { return !!val || 'This field is required.'; },
      },
    };
  },
  computed: {
    allowedGuests() {
      return this.guest?.guests ? this.guest.guests.split(',') : [];
    },
    guestsAttending() {
      // adding one to include the guest and their selected guest(s)
      return this.attending?.id === '1' ? this.selectedGuests.length + 1 : 0;
    },
  },
  mounted() {
    this.getGuests();
  },
  methods: {
    async getGuests() {
      const response = await this.$api.get('/guests.json');
      this.guests = response.data;
    },
    guestsFilter(val, update) {
      if (val === '') {
        update(() => {
          this.options = this.guests;
        });
      } else {
        update(() => {
          const needle = val.toLowerCase();
          this.options = this.guests.filter((v) => v.toLowerCase().indexOf(needle) > -1);
        });
      }
    },
    async submit() {
      this.$q.loading.show();
      try {
        const params = {
          attending: this.attending.id,
          total_guests_attending: this.guestsAttending,
          rsvp: this.rsvp,
          date_updated: (new Date()).toLocaleString(),
        };
        const response = await this.$api.patch(`/guests/${this.guest.id - 1}.json`, params);
        if (response.status === 200) {
          this.$q.notify({
            message: 'RSVP successful.',
            color: 'positive',
            position: 'top',
          });
        }
        this.resetForm();
        this.$q.loading.hide();
      } catch (error) {
        console.log('error', error);
        this.$q.loading.hide();
        this.$q.notify({
          message: 'RSVP unsuccessful. Please try again.',
          color: 'negative',
          position: 'top',
        });
      }
    },
    resetForm() {
      this.guest = null;
      this.attending = null;
      this.guestCount = null;
      this.selectedGuests = [];
      this.$refs.rsvpForm.reset();
    },
  },
};
</script>
