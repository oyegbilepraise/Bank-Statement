<template>
  <div
    class="w-5 h-5 text-xs rounded-full flex justify-center items-center whitespace-nowrap"
    :class="{
      'bg-gray-600 text-white': variant === 'default',
      'bg-red-600 text-white': variant === 'danger',
      'bg-green-600 text-white': variant === 'success',
      'bg-yellow-600 text-white': variant === 'warning',
    }"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
