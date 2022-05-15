<template>
  <div style="border-bottom: 1px solid black;" class="outfit">
    <div class="row q-pa-lg">
      <div
        class='col fontsize-48'
      >
        <span>When & Where</span>
      </div>
    </div>
    <div class="row q-pb-lg">
      <div class="col-xs-12 col-sm-6">
        <q-img
          src="../assets/twinLakes.jpeg"
          style="max-width: 90%"
          class="image"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-img
          src="../assets/outside.jpg"
          style="max-width: 90%"
          class="image"
        />
      </div>
    </div>
    <q-separator  inset />
    <div
      class="row fontsize-36"
      style="margin: 5% 0 5% 0"
    >
      <div class="col-xs-12 col-lg">
        <div class="q-pb-sm">Location</div>
        <div class="q-py-sm"><q-icon name="place" size="7rem" /></div>
        <div class="fontsize-22">Twin Lakes Wedding & Event Center</div>
        <div class="fontsize-22 q-pb-lg">6268 Foster, Ropesville, TX 79358</div>
        <q-separator inset class="lt-lg" />
      </div>
      <q-separator vertical class="gt-md" />
      <div class="col-xs-12 col-lg">
        <div>Wedding Day</div>
        <div class="q-py-sm"><q-icon name="event" size="7rem" /></div>
        <div class="fontsize-22">Saturday</div>
        <div class="fontsize-22 q-pb-lg">October 8th 2022</div>
        <q-separator inset class="lt-lg" />
      </div>
    </div>
    <q-separator inset class="gt-md" />
    <div
      class="row fontsize-36"
      style="margin: 5% 0 5% 0"
    >
      <div class="col-xs-12 col-lg-6">
        <div>Ceremony</div>
        <div class="q-py-sm"><q-icon name="church" size="7rem" /></div>
        <div class="q-pb-lg">5:00 PM</div>
        <q-separator inset class="lt-lg" />
      </div>
      <q-separator vertical class="gt-md" />
      <div class="col-xs-12 col-lg">
        <div>Coctail Hour</div>
        <div class="q-py-sm"><q-icon name="local_bar" size="7rem" /></div>
        <div>6:00 PM</div>
        <div class="fontsize-18">(Reception to follow.)</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhenAndWhere',
};
</script>
