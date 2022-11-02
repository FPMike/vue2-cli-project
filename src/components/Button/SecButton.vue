<template>
  <button class="btn">
    {{ label }}
  </button>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: 'Initial label',
    },
  },
};
</script>

<style lang="scss">
@import "_variables";

.btn {
  background-color: firebrick;
  color: white;
  padding: .6rem .8rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: .125s;

  &:hover {
    background-color: crimson;
  }

  &:active {
    background-color: tomato;
  }
}
</style>
