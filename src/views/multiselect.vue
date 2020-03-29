<template>
<div align="center" >
  <label class="typo__label">Multiselect Page</label>
  <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seçmek için dokun" label="dil" track-by="dil" :preselect-first="true">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} tane seçili</span></template>
  </multiselect>
  <table>
    <tr>
      <th>
       <p>Dil</p>
      </th>
      <th>
       <p>Uzantı</p>
      </th>
    </tr>
    <tr>
      <td>
       <p>{{ value[0].dil }}</p>
      </td>
      <td>
       <p align="right">{{ value[0].uzantı }}</p>
      </td>
    </tr>
    <tr v-if="value[1]!=null" >
      <td>
       <p >{{ value[1].dil }}</p>
      </td>
      <td>
       <p align="right">{{ value[1].uzantı }}</p>
      </td>
    </tr>
    <tr v-if="value[2]!=null" >
      <td>
       <p>{{ value[2].dil }}l</p>
      </td>
      <td>
       <p align="right">{{ value[2].uzantı }}</p>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
import Vue from 'vue'
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)

export default {
  components: { Multiselect },
  data () {
    return {
      value: [
        { dil: 'Javascript', uzantı: ' .js' } // Seçili seçenek
      ],
      options: [
        { dil: 'c++', uzantı: ' .cpp' },
        { dil: 'Javascript', uzantı: ' .js' },
        { dil: 'Phyton', uzantı: ' .py' }
      ]
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
</script>

<style src="../styles/multiselect.css"></style>
