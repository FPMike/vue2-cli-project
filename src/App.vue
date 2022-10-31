<template>
  <VButton
    :is-active="isActive"
    label="Vue 2 🧡 / 💔?"
    :onClick="onBtnClick"
  />
</template>

<script>
import './assets/style.scss';

import VButton from './components/Button/Button.vue';

export default {
  name: 'App',
  components: {
    VButton,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onBtnClick() {
      console.log('Man, oh man it is working!');
      this.isActive = !this.isActive;
    },
  },
};
</script>
