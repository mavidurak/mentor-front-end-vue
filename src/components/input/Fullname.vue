<template>
  <div class="form-group">
    <label for="inputname">{{title}}</label>
    <validation-provider
      name="name"
      rules="required|min:3|max:20"
      v-slot="{ errors }"
    >
      <input
        type="text"
        class="form-control"
        id="inputname"
        :value="value"
        @input="$emit('update', $event.target.value)"
        placeholder="Enter your fullname"
      />
      <span>{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>

import { ValidationProvider } from 'vee-validate'

export default {
  name: 'FullnameInput',
  components: {
    ValidationProvider
  },
  props: {
    value: String,
    title: {
      type: String,
      default: 'Fullname:'
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  }
}
</script>
