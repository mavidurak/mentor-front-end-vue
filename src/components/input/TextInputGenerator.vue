<template>
  <div class="form-group">
    <label>{{title}}:</label>
    <validation-provider
      mode="eager"
      :name=title
      :rules=rules
      v-slot="{ errors,classes }"
    >
      <input
        :type=type
        class="form-control"
        :class="classes"
        :value="value"
        @input="$emit('update', $event.target.value)"
        :placeholder= makePlaceholder(title)
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
      default: 'Username'
    },
    rules: {
      type: String
    },
    type: {
      type: String
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  methods: {
    makePlaceholder: function (title) {
      return `Enter your ${title}`
    }
  }
}
</script>
