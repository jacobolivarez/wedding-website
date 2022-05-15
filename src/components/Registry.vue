<template>
  <div style="border-bottom: 1px solid black;" class="outfit">
    <div class="row q-pa-lg">
      <div
        class='col fontsize-48 q-py-lg'
      >
        <span>Registry</span>
      </div>
    </div>
    <div class="fit row wrap">
      <div class="col-lg-8 col-md-6 col-xs-12 q-pa-sm offset-md-2">
        <q-card>
          <q-card-section>
            <span class="fontsize-28">
              Your love, laughter and company on our wedding day is the greatest
              gift of all. However, should you wish to help us celebrate with a gift,
              we've created a honeymoon fund and a registry. Below are links to both.
            </span>
          </q-card-section>
          <q-card-actions align="center">
            <q-btn
              label="Honeymoon Fund"
              class="bg-secondary text-white q-mb-md"
              size="xl"
              no-caps
              @click="honeymoonFund = true"
            />
            <q-btn
              label="Registry"
              class="bg-secondary text-white q-mb-md"
              size="xl"
              no-caps
              href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551152525"
              target="_blank"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div>
      <q-dialog
        v-model="honeymoonFund"
      >
        <q-card>
          <q-card-section class="row items-center bg-grey-3">
            <div class="text-h5">Honeymoon Fund</div>
            <q-space />
            <q-btn
              flat
              dense
              icon="close"
              color="secondary"
              v-close-popup
            />
            <!-- <q-btn icon="close" flat round dense v-close-popup /> -->
          </q-card-section>
          <q-card-section class="q-pb-none">
            <p>
              We have decided that the location of our honeymoon will be
              Punta Cana in the Dominican Republic. We are planning
              to be there in Decemeber. If you would like to donate,
              the links below will take you to our Venmos.
            </p>
          </q-card-section>
          <q-card-actions align="center" class="q-pb-lg">
            <q-btn
              icon="img:/icons/venmo-100x100.svg"
              label="Jacob"
              class="bg-secondary text-white"
              href="https://account.venmo.com/u/JacobOlivarez"
              target="_blank"
            />
            <q-btn
              icon="img:/icons/venmo-100x100.svg"
              label="Marissa"
              class="bg-secondary text-white"
              href="https://account.venmo.com/u/MarissaMT"
              target="_blank"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registry',
  data() {
    return {
      honeymoonFund: false,
    };
  },
};
</script>
