<template>
  <div align="center">
    <div @mousemove="isSelect" @keydown.enter="addTag" >
      <multiselect
        style="width: 100%"
        v-model="value"
        :options="options"
        :close-on-select="false"
        :clearText-on-select="false"
        :preserve-search="true"
        :preselect-first="false"
        label="key"
        track-by="key"
        @change="addTag"
        @input="$emit('get-key', value)"
        placeholder="Seçmek için dokun"
      >
      </multiselect>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      selectedkey: null,
      options: [
        { key: 'Amount' },
        { key: 'Liter' },
        { key: 'Celsius' },
        { key: 'Humidity(g/m3)' },
        { key: 'Light intensity(Candela - cd)' },
        { key: 'Acceleration' },
        { key: 'Meter(m)' },
        { key: 'Magnetic field' },
        { key: 'Voltage(V)' },
        { key: 'Current(A)' },
        { key: 'Pressure(Pascal - Pa)' }
      ],
      value: []
    }
  },
  methods: {
    addTag: function () {
      const search = this.$children[0].search
      if (search !== '') {
        const tag = { key: search }
        this.value.push(tag)
        this.options.push(tag)
      }
    },
    isSelect: function () {
      if (this.selectedkey) {
        this.value.push({ key: this.selectedkey })
        this.selectedkey = false
      }
    }
  }
}
</script>

<style src="../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
