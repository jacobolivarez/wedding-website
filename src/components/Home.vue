<template>
  <div style="border-bottom: 1px solid black;" class="outfit">
    <div class="row q-pa-lg">
      <div
        class='col fontsize-48 q-py-lg'
      >
        <span class="q-pt-md">We're Getting Married!</span>
      </div>
    </div>
    <div class="q-pa-lg fit row wrap justify-start items-start content-start">
      <div class="col-lg-4 col-xs-12 q-pa-xs">
        <q-img
          src="../assets/homePage.png"
        />
      </div>
      <div class="col-lg-4 col-xs-12 q-pa-xs">
        <q-img
          src="../assets/homePage2.png"
        />
      </div>
      <div class="col-lg-4 col-xs-12 q-pa-xs">
        <q-img
          src="../assets/homePage3.png"
        />
      </div>
    </div>
    <div class="q-pt-lg">
      <q-separator inset />
    </div>
    <div
      class="row fontsize-36"
      style="margin: 5% 0 5% 0"
    >
      <div class='col'>
        <div>
          <span>10-08-22</span>
        </div>
      </div>
      <q-separator vertical />
      <div class='col'>
        <div>
          <span>Ropesville, TX</span>
        </div>
      </div>
    </div>
    <q-separator inset />
    <div class="row fontsize-22 q-py-md">
      <div class='col'>
        <div>
          <span>Time Until Wedding</span>
        </div>
        <Countdown
          deadline="2022-10-08 17:00:00"
          mainColor="white"
          labelColor="black"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Countdown } from 'vue3-flip-countdown';

export default {
  name: 'Home',
  components: {
    Countdown,
  },
};
</script>

<style>
</style>
