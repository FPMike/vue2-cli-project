import Button from "./Button.vue";

export default {
  component: Button,
};

export const Primary = () => ({
  components: { Button },
  template: '<Button primary label="Button" />',
});
