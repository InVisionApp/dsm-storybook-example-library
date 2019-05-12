<template>
  <div v-bind:key="status"  v-bind:class="['c-toast', status]">
    <component v-bind:is="status + '-icon'" class="c-toast__icon"></component>
      <span class="c-toast__text"><slot></slot></span>
    <close-icon class="c-toast__close-icon"/>
  </div>
</template>

<script>
import { flagIcon, warnIcon, checkmarkIcon, errorIcon, infoIcon, closeIcon } from './icons';
/**
 * This is a description coming from the MyButton component code
 */
export default {
  name: 'toast',

  components: {
    'close-icon': closeIcon,
    'default-icon': flagIcon,
    'info-icon': infoIcon,
    'warning-icon': warnIcon,
    'success-icon': checkmarkIcon,
    'error-icon': errorIcon
  },

  props: {
    status: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'warning', 'info', 'error', 'success'].indexOf(value) !== -1;
      }
    },
    text: String
  }
};
</script>

<style lang="scss">
@import './_toast.scss';
</style>
