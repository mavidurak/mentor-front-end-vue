<template>
  <div class="form-group">
    <label for="inputPassword">{{title}}</label>
    <validation-provider
      mode="eager"
      name="password"
      rules="required|min:8|max:16"
      v-slot="{ errors,classes }"
    >
      <input
        type="password"
        class="form-control"
        :class="classes"
        :value="value"
        @input="$emit('update', $event.target.value)"
        placeholder="Enter your password"
      />
      <div class="mt-1 invalid-feedback" >{{ errors[0] }}</div>
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
