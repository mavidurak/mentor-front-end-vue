<template>
  <div id="app">
    <component :is="layout">
      <notifications group="foo" position="bottom right" />
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$route.meta.layout) {
        return `${this.$route.meta.layout}-layout`
      } return null
    }
  }
}
</script>
