<template>
  <div class="form-group">
    <label for="inputUsername">{{title}}</label>
    <validation-provider
      name="username"
      rules="required|min:3|max:20"
      v-slot="{ errors }"
    >
      <input
        type="text"
        class="form-control"
        id="inputUsername"
        :value="value"
        @input="$emit('update', $event.target.value)"
        placeholder="Enter your username"
      />
      <span>{{ errors[0] }}</span>
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
