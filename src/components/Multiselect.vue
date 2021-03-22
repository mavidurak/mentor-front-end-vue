<template>
  <div align="center">
    <div @mousemove="isSelect" @keydown.enter="addTag" >
      <multiselect
        style="width: 100%"
        v-model="value"
        :options="options"
        :multiple="true"
        :max=1
        :close-on-select="false"
        :clearText-on-select="false"
        :preserve-search="true"
        :preselect-first="false"
        label="key"
        track-by="key"
        @tag="addTag"
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
