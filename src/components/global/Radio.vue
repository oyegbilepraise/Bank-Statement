<template>
  <Field :name="name" v-slot="{ field }" type="radio" :value="value">
    <label class="flex items-center">
      <input v-bind="field" type="radio" :value="value"/>
      <span class="ml-3">
      <slot></slot>
    </span>
    </label>
  </Field>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "AppRadio",
  components: { Field },
  props: {
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
}
</script>
