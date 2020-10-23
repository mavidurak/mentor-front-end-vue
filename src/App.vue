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
      if (this.$route.meta.layout !== undefined) {
        return (this.$route.meta.layout) + '-layout'
      } else {
        return null
      }
    }
  }
}
</script>
