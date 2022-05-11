<template>
  <Field v-model="query" :name="name" v-slot="{ field, errorMessage }">
    <label class="flex flex-col items-start w-full relative">
      <SearchIcon
        class="absolute top-1/2 left-4 -translate-y-1/2 w-5 opacity-60"
      />
      <input
        type="search"
        v-bind="field"
        ref="input"
        class="
          py-2
          p
          pl-12
          border border-gray-300
          bg-white
          rounded-md
          w-full
          focus:outline-none focus:ring
        "
        :placeholder="placeholder"
        :class="{ 'opacity-50': disabled }"
        :disabled="disabled"
      />
      <small v-if="errorMessage" class="text-red-500 mt-2">{{
        errorMessage
      }}</small>
    </label>
  </Field>
</template>

<script>
import { Field } from "vee-validate";
import { SearchIcon } from "@heroicons/vue/outline";

export default {
  name: "SearchInput",
  components: { Field, SearchIcon },
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    timeout: null,
    query: "",
  }),
  mounted() {
    this.$refs.input.addEventListener("input", () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$emit("search", this.query);
      }, 800);
    });
  },
};
</script>
