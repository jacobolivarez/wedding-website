<template>
  <Page
    title="We're Getting Married!"
  >
    <div :class="containerClass">
      <div :class="pictureContainer">
        <q-img
          src="../assets/homePage.png"
        />
      </div>
      <div :class="pictureContainer">
        <q-img
          src="../assets/homePage2.png"
        />
      </div>
      <div :class="pictureContainer">
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
  </Page>
</template>

<script>
import { Countdown } from 'vue3-flip-countdown';

export default {
  name: 'Home',
  components: {
    Countdown,
  },
  computed: {
    containerClass() {
      return [
        'row',
        'q-py-md',
      ];
    },
    pictureContainer() {
      return [
        'col-lg-4',
        'col-xs-12',
        'q-pa-xs',
      ];
    },
  },
};
</script>
