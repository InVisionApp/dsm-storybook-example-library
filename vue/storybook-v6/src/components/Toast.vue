<template>
  <div v-bind:key="status"  v-bind:class="['c-toast', status]">
    <component v-bind:is="status + '-icon'" class="c-toast__icon"></component>
      <span class="c-toast__text"><slot></slot></span>
    <close-icon class="c-toast__close-icon"/>
  </div>
</template>

<script>
import { closeIcon } from './icons';
import { toastIcons } from './icons/toast-icons';

/**
 * Toasts provide dismissable feedback\information for the user.
 */
export default {
  name: 'toast',

  components: {
    'close-icon': closeIcon,
    'default-icon': toastIcons.default,
    'info-icon': toastIcons.info,
    'warning-icon': toastIcons.warning,
    'success-icon': toastIcons.success,
    'error-icon': toastIcons.error
  },

  props: {
    /**
     * Changes the visual display of the toast
     * */
    status: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'warning', 'info', 'error', 'success'].indexOf(value) !== -1;
      }
    },
    /**
     * The content of the toast
     * */
    text: String
  }
};
</script>

<style lang="scss">
@import './_toast.scss';
</style>
