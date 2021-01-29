<template>
  <div class="form-group">
    <label for="inputMail">{{title}}</label>
    <validation-provider
      name="email"
      rules="required|email"
      v-slot="{ errors }"
    >
      <input
        type="email"
        class="form-control"
        id="inputMail"
        :value="value"
        @input="$emit('update', $event.target.value)"
        placeholder="Enter your email"
      />
      <span>{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'EmailInput',
  components: {
    ValidationProvider
  },
  props: {
    value: String,
    title: {
      type: String,
      default: 'Email: '
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  }
}
</script>
