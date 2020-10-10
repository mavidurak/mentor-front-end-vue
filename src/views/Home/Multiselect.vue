<template>
  <div align="center">
    <div>
      <multiselect
        style="width: 100%"
        v-model="value"
        :options="options"
        :multiple="true"
        :close-on-select="true"
        :clearText-on-select="false"
        :preserve-search="true"
        placeholder="Seçmek için dokun"
        label="key"
        track-by="key"
        @input="$emit('get-key', value)"
        :preselect-first="false"
      >
      </multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  props: {
    selectedkey: Object
  },
  data () {
    return {
      options: [
        { key: 'Temperature' },
        { key: 'Humidity' },
        { key: 'Light intensity' },
        { key: 'Acceleration' },
        { key: 'Distance' },
        { key: 'Infrared' },
        { key: 'RGB' },
        { key: 'UV' },
        { key: 'Magnetic field' },
        { key: 'Voltage' },
        { key: 'Current' },
        { key: 'Pressure' }
      ],
      value: []
    }
  },
  methods: {
  }
}
</script>

<style src="../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
