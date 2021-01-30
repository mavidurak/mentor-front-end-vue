<template>
  <div class="form-group">
    <label for="inputMail">{{title}}</label>
    <validation-provider
      mode="eager"
      name="email"
      rules="required|email"
      v-slot="{ errors,classes }"
    >
      <input
        type="email"
        class="form-control"
        :class="classes"
        :value="value"
        @input="$emit('update', $event.target.value)"
        placeholder="Enter your email"
      />
      <div class="mt-1 invalid-feedback" >{{ errors[0] }}</div>
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
