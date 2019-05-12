<template>
  <div  v-bind:class="['c-button', {'c-button__disabled': disabled}, {'c-button__with-icon': icon !== 'none'}]">
    <div class="c-button__content">
      <slot></slot>
    </div>
    <div v-if="icon !== 'none'" class="c-button__icon">
      <chevron-right v-if="icon === 'chevron-right'" />
    </div>
  </div>
</template>

<script>
import { chevronRightIcon } from './icons';
/**
 * This is a description coming from the MyButton component code
 */
export default {
  name: 'my-button',

  components: { 'chevron-right': chevronRightIcon },

  props: {
    icon: {
      type: String,
      default: 'none',
      validator: function(value) {
        return ['none', 'chevron-right'].indexOf(value) !== -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@import './_button.scss';
</style>
