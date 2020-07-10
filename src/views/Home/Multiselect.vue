<template>
<div align="center" >
  <label class="typo__label">Multiselect</label>
  <div>
    <multiselect style="width: 35%" v-model="value" :options="options" :multiple="true" :close-on-select="false" :clearText-on-select="false" :preserve-search="true" placeholder="Seçmek için dokun" label="language" track-by="extension" @tag="addTag" :preselect-first="false">
    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="(values.length &amp;&amp; !isOpen)">{{ values.length }} tane seçili</span></template>
  </multiselect> <br>
  <div class="input-group mb-3" style="width: 35%" >
    <div class="input-group-prepend">
    <span class="input-group-text" id="">Dil ve uzantısı</span>
  </div>
  <input type="text" class="form-control"  v-model="langInput" placeholder="örn: c++">
  <input type="text" class="form-control" v-model="extnsionInput" placeholder="örn: .cpp">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button" @click="dataAdd">Ekle</button>
    <button class="btn btn-outline-secondary" type="button" @click="dataRemove" >Sil</button>
  </div>
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
        { language: 'c++', extension: ' .cpp' },
        { language: 'Javascript', extension: ' .js' },
        { language: 'Phyton', extension: ' .py' }
      ],
      value: [],
      langInput: '',
      extnsionInput: ''
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        language: newTag,
        extension: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)) // Ayni isimdeki taglerin karismamasi icin random id verir.
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    clearText: function () { // Girilen textleri siler
      this.langInput = ''
      this.extnsionInput = ''
    },
    dataAdd: function () { //  girilen değerleri ekler.Girdi için regex yazılmalı(extnsionInput . ile basamali ,bos giris yapilamaz vb.).
      this.options.push({ language: this.langInput, extension: this.extnsionInput })
      alert(this.langInput + ' adlı ' + this.extnsionInput + ' uzantılı dil eklendi')
      this.clearText()
    },
    dataRemove: function () { //  girilen değerleri siler.Regex yazılmalı.
      var index = 0
      for (index; index < this.options.length; index++) {
        if (this.options[index].language === this.langInput) {
          this.options.splice(index, 1)
          alert(this.langInput + ' dili silindi.')
          this.clearText()
          return
        }
      }
      alert('HATA ,Lütfen listeden bir dil giriniz!')
      this.clearText()
    }
  }
}
</script>

<style src="../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
