<template>
  <div style="border-bottom: 1px solid black" class="outfit text-center">
    <div class="row q-pt-xl">
      <div class="col">
        <h2>{{ title }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
