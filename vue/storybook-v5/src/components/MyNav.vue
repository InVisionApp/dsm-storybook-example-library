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
 * The Nav is used for site navigation.
 */
export default {
  name: 'my-nav',

  data: function() {
    return {
      activeTab: this.initialActiveTab
    };
  },

  props: {
    /**
     * An array of the items to be displayed in the Nav.
     */
    tabs: {
      type: Array
    },
    /**
     * The active tab Id to initialize the Nav component
     */
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
