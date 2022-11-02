import Button from './Button.vue';

export default {
  title: 'Core/Button',
  argTypes: {
    onClick: {
      action: 'Button clicked',
    },
  },
  component: Button,
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'New Button',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/muBMn2Ma8NvNXvtpoEEewD/DS-test',
  },
};

export const Accents = Template.bind({});
Accents.args = {
  label: 'Accents Button',
};
