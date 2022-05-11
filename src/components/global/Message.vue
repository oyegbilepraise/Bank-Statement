<template>
  <div class="py-2 px-6 border rounded-lg"
       :class="{
          'border-gray-200 bg-gray-100 text-gray-700 bg-gray-50' : variant === 'default',
          'border-blue-200 bg-blue-100 text-blue-700 bg-blue-50' : variant === 'info',
          'border-green-200 bg-green-100 text-green-700 bg-green-50' : variant === 'success',
          'border-red-200 bg-red-100 text-red-700 bg-red-50' : variant === 'error',
          'border-yellow-200 bg-yellow-100 text-yellow-700 bg-yellow-50' : variant === 'warning',
        }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    variant: {
      type: String,
      default: 'default',
      options: ['default', 'info', 'success', 'error', 'warning']
    }
  }
}
</script>
