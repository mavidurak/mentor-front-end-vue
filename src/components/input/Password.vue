<template>
  <div class="form-group">
    <label for="inputPassword">{{title}}</label>
    <validation-provider
      name="password"
      rules="required|min:8|max:16"
      v-slot="{ errors }"
      :bails="false"
    >
      <input
        type="password"
        class="form-control"
        id="inputPassword"
        :value="value"
        @input="$emit('update', $event.target.value)"
        placeholder="Enter your password"
      />
      <span>{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'PasswordInput',
  components: {
    ValidationProvider
  },
  props: {
    value: String,
    title: {
      type: String,
      default: 'Password:'
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  }
}
</script>
