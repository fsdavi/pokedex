<template>
  <div class="text-container">
    <h2>{{ messageText }}</h2>
    <span class="arrow" />
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    messageText: {
      type: String,
      required: true,
    },
  },
})
export default class BoxDialog extends Vue {}
</script>

<style scoped src="../styles/components/BoxDialog.css">
</style>
