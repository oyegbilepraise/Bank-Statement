<template>
  <div
    class="rounded-lg flex items-center whitespace-nowrap"
    :class="{
      'bg-gray-100 text-gray-800': variant === 'default',
      'bg-red-100 text-red-600': variant === 'danger',
      'bg-green-100 text-green-700': variant === 'success',
      'bg-yellow-100 text-yellow-700': variant === 'warning',
      'px-3 py-1 text-base': size === 'md',
      'px-3 py-[1px] text-sm': size === 'sm',
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: {
    variant: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>
