<template>
  <div class="form-group">
    <label for="inputUsername">{{title}}</label>
    <validation-provider
      mode="eager"
      name="username"
      rules="required|min:3|max:20"
      v-slot="{ errors,classes }"
    >
      <input
        type="text"
        class="form-control"
        :class="classes"
        :value="value"
        @input="$emit('update', $event.target.value)"
        placeholder="Enter your username"
      />
      <div class="mt-1 invalid-feedback" >{{ errors[0] }}</div>
    </validation-provider>
  </div>
</template>
<script>

import { ValidationProvider } from 'vee-validate'

export default {
  name: 'UsernameInput',
  components: {
    ValidationProvider
  },
  props: {
    value: String,
    title: {
      type: String,
      default: 'Username:'
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  }
}
</script>
