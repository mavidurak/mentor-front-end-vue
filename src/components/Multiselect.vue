<template>
  <div align="center">
    <div>
      <multiselect
        style="width: 100%"
        v-model="value"
        :options="options"
        :close-on-select="true"
        :multiple="multiple"
        label="key"
        track-by="key"
        @input="$emit('getKey', value)"
        placeholder="Seçmek için dokun"
      >
      </multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  props: {
    multiple: Boolean,
    options: Array,
    selectedKey: String
  },
  data () {
    return {
      value: []
    }
  },
  mounted () {
    this.value = this.selectedKey ? { key: this.selectedKey } : []
  },
  methods: {
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
