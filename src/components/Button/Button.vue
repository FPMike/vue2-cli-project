<template>
  <button
    type="button"
    class="btn"
    :class="{ active: isActive }"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>

export default {
  props: {
    isActive: Boolean,
    label: {
      type: String,
      default: 'My Button',
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "_variables";

.btn {
  background-color: var(--btn-bg-color);
  color: var(--btn-color);
  padding: var(--btn-padding);
  font-size: var(--btn-font);
  margin: var(--btn-margin);
  border: var(--btn-border);
  cursor: pointer;
  font-family: sans-serif;

  &:hover {
    background-color: var(--btn-hover-bg-color);
  }

  &:active {
    background-color: var(--btn-active-bg-color);
  }

  &.active {
    background-color: var(--btn-bg-color-success);
  }
}
</style>
