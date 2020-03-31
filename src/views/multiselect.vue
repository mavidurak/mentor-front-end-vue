<template>
<div align="center" >
  <label class="typo__label">Multiselect Page</label>
  <multiselect v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Seçmek için dokun" label="dil" track-by="dil" :preselect-first="false">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} tane seçili</span></template>
  </multiselect> <br>
  <div class="input-group mb-3" style="width: 35%" >
    <div class="input-group-prepend">
    <span class="input-group-text" id="">Dil ve uzantısı</span>
  </div>
  <input type="text" class="form-control" id="dilgir" placeholder="örn: c++">
  <input type="text" class="form-control" id="uzantigir" placeholder="örn: .cpp">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" @click="VeriEkle">Ekle</button><!--Regex yazılmalı-->
    <button class="btn btn-outline-secondary" type="button" @click="VeriSil" >Sil</button><!--Regex yazılmalı-->
  </div>
</div>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      options: [
        { dil: 'c++', uzantı: ' .cpp' },
        { dil: 'Javascript', uzantı: ' .js' },
        { dil: 'Phyton', uzantı: ' .py' }
      ],
      value: []
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        uzantı: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    seciliDeger ({ a, b }) { //  ilk değeri ekler
      this.value.push({ dil: this.options[1].dil, uzantı: this.options[1].uzantı })
    },
    VeriEkle: function () { //  girilen değerleri ekler.Regex yazılmalı
      this.options.push({ dil: document.getElementById('dilgir').value, uzantı: document.getElementById('uzantigir').value })
      alert(this.options[this.options.length - 1].dil + ' adlı ' + this.options[this.options.length - 1].uzantı + ' uzantılı dil eklendi')
      document.getElementById('dilgir').value = ''
      document.getElementById('uzantigir').value = ''
    },
    VeriSil: function () { //  girilen değerleri siler.Regex yazılmalı
      var index = 0
      for (index; index < this.options.length; index++) {
        if (this.options[index].dil === document.getElementById('dilgir').value) {
          this.options.splice(index, 1)
          alert(document.getElementById('dilgir').value + ' silindi.')
          document.getElementById('dilgir').value = ''
          document.getElementById('uzantigir').value = ''
          return
        }
      }
    }
  }
}
</script>

<style src="../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
