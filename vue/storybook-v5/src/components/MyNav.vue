<template>
  <ul class="c-nav">
    <li v-for="tab in tabs" v-bind:key="tab.id" class="c-nav__tab" v-on:click="setActiveTab(tab)">
      <div v-bind:class="['c-nav__tab-content', {'c-nav__tab--active': activeTab === tab.id }]">
        {{tab.title}}
      </div>
    </li>
  </ul>
</template>

<script>
/**
 * This is a description coming from the MyButton component code
 */
export default {
  name: 'my-nav',

  data: function() {
    return {
      activeTab: this.initialActiveTab
    };
  },

  props: {
    tabs: {
      type: Array,
      default: []
    },
    initialActiveTab: String
  },

  methods: {
    setActiveTab: function(tab) {
      this.activeTab = tab.id;
    }
  }
};
</script>

<style lang="scss">
@import './_nav.scss';
</style>
