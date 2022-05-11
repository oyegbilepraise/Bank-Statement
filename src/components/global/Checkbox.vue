<template>
  <Field :name="name" v-slot="{ field }" type="checkbox" :unchecked-value="false" :value="true">
    <label class="flex items-center">
      <input v-bind="field" type="checkbox"/>
      <span class="ml-3"><slot></slot></span>
    </label>
  </Field>
</template>

<script>
import { Field } from "vee-validate";

export default {
  name: "AppCheckbox",
  components: { Field },
  props: {
    name: {
      type: String,
      required: true
    }
  },
}
</script>
