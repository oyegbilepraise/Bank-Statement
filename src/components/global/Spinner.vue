<template>
  <div v-if="variant === 'slices'" class="sp sp-slices"></div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    variant: {
      type: String,
      default: 'slices'
    }
  }
}
</script>

<style scoped lang="scss">
@use "sass:math";

$spCol: #273d98;

$size: 24px;

.sp {
  width: $size;
  height: $size;
}

.sp.sp-slices {
  border-radius: 50%;
  border-top: math.div($size, 2) rgba($spCol, 0.75) solid;
  border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
  border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
  -webkit-animation: spSlices 1s infinite linear;
  animation: spSlices 1s infinite linear;
}

@-webkit-keyframes spSlices {
  0% {
    border-top: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
  25% {
    border-top: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
  50% {
    border-top: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
  75% {
    border-top: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.75) solid;
  }
  100% {
    border-top: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
}

@keyframes spSlices {
  0% {
    border-top: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
  25% {
    border-top: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
  50% {
    border-top: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
  75% {
    border-top: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.75) solid;
  }
  100% {
    border-top: math.div($size, 2) rgba($spCol, 0.75) solid;
    border-right: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-bottom: math.div($size, 2) rgba($spCol, 0.25) solid;
    border-left: math.div($size, 2) rgba($spCol, 0.25) solid;
  }
}
</style>
