<template>
  <div class="text-center max-w-xs mx-auto">
    <div v-if="variant === 'bounce'" class="loader bounce">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </div>

    <div v-if="variant === 'pulse'" class="loader pulse">
      <span class="circle"></span>
    </div>

    <p v-if="text" class="mt-8 text-gray-600 font-semibold text-lg">{{ text }}</p>
    <p v-if="subtext" class="text-gray-500 mt-2">{{ subtext }}</p>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    variant: {
      type: String,
      default: 'bounce'
    },
    text: {
      type: String,
    },
    subtext: {
      type: String
    }
  }
}
</script>

<style scoped>
.loader {
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader.pulse .circle {
  display: block;
  width: 100px;
  height: 100px;
  background: #f9f9f9;
  border-radius: 50%;
  position: relative;
}

.loader.pulse .circle::after, .loader.pulse .circle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  animation: pulse 3s linear infinite;
  opacity: 0;
}

.loader.pulse .circle::before {
  animation: pulse 2s linear 2.3s infinite;
}

.loader.bounce .circle {
  width: 10px;
  height: 10px;
  background: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.loader.bounce .circle:first-child {
  animation: bounce 0.5s infinite 0.4s alternate ease-in-out;
}

.loader.bounce .circle:nth-child(2) {
  margin-left: -30px;
  background: #ddd;
  animation: bounce 0.5s infinite alternate ease-in-out;
}

.loader.bounce .circle:nth-child(3) {
  margin-left: 30px;
  background: #bbb;
  animation: bounce 0.5s infinite 0.6s alternate ease-in-out;
}

@keyframes pulse {
  1% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

@keyframes bounce {
  1%, 100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  100% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
}
</style>
