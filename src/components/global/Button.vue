<template>
  <button
    class="inline-flex justify-center items-center rounded-md outline-none font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap"
    :class="{
        'bg-green-600 hover:bg-green-700 focus:bg-green-700 text-white': variant === 'success',
        'bg-red-600 hover:bg-red-700 focus:bg-red-700 text-white': variant === 'danger',
        'bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white': variant === 'primary',
        'bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 text-gray-800': variant === 'secondary',
        'bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 text-white': variant === 'dark',
        'bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 text-gray-800': variant === 'light',
        'bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-700 hover:text-white': variant === 'outline',
        'bg-transparent border border-red-600 text-red-600 hover:bg-red-700 hover:text-white': variant === 'outline-danger',
        'px-5 py-2': size === 'md',
        'py-1 px-4 text-md': size === 'sm',
        'py-[1px] px-3 text-md text-sm font-normal': size === 'xs',
        'py-3 px-8': size === 'lg',
        'loading': loading, 'opacity-50 cursor-not-allowed' : disabled
      }"
    :type="type" :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      options: ['sm', 'md', 'lg'],
      default: 'md'
    },
    type: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.loading {
  position: relative;
  pointer-events: none;
}

.loading::before {
  content: '';
  position: absolute;
  background: inherit;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: inherit;
  opacity: .9;
}

.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6px;
  margin-left: -6px;
  width: 12px;
  height: 12px;
  border: 2px solid transparent;
  border-top-color: inherit;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
