<template>
  <VButton
    :is-active="isActive"
    label="Design is my passion XD"
    @click="onBtnClick"
  />
</template>

<script>
import './assets/style.scss';

import VButton from './components/Button/Button.vue';

// let isActive;

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
      this.isActive = !this.isActive;
      console.log('man it is not working');
    },
  },
};
</script>
