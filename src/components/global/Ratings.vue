<template>
  <span class="inline-flex">
    <StarIcon
      class="text-gray-300 text-base w-5" v-for="i in 5" :key="i"
      :class="{'!text-green-500': value >= i}"
    />
  </span>
</template>

<script>
import { StarIcon } from "@heroicons/vue/solid";

export default {
  name: "Ratings",
  components: { StarIcon },
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

