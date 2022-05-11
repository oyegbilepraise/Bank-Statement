<template>
  <footer class="pt-24 pb-12 bg-gray-200 bg-opacity-80">
    <div class="container w-full md:max-w-7xl">
      <div class="divide-x divide-gray-400 flex justify-center">
        <div class="flex flex-col px-8 lg:px-16">
          <div class="text-3xl font-semibold text-green-600">12,450</div>
          <div class="text-sm">Happy Agents</div>
        </div>
        <div class="flex flex-col px-8 lg:px-16">
          <div class="text-3xl font-semibold text-green-600">1,560</div>
          <div class="text-sm">Research done</div>
        </div>
        <div class="flex flex-col px-8 lg:px-16">
          <div class="text-3xl font-semibold text-green-600">3,000</div>
          <div class="text-sm">Research posted</div>
        </div>
      </div>
      <p class="text-xl font-medium text-center max-w-2xl mx-auto mt-16">
        Fieldoracle is a solution for researchers looking to carry out research around the world without moving an inch.
        For more details contact us at support@fieldoracle.com
      </p>
      <div class="flex flex-col md:flex-row mt-28 text-gray-500">
        <div class="space-y-4 md:space-y-0 space-x-0 md:space-x-6 lg:space-x-10 flex flex-col md:flex-row">
          <router-link to="/terms">Terms & conditions</router-link>
          <router-link to="/">Privacy policy</router-link>
        </div>
        <div
          class="mt-10 md:mt-0 md:ml-auto flex flex-col md:flex-row md:items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <router-link to="/">Copyrights &copy; Field Oracle</router-link>
          <div class="flex space-x-8 md:space-x-4">
            <a href="https://fb.com" target="_blank" class="text-2xl md:text-xl hover:text-blue-500">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-2xl md:text-xl hover:text-cyan-500">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="text-2xl md:text-xl hover:text-blue-800">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="text-2xl md:text-xl hover:text-red-500">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://telegram.org" target="_blank" class="text-2xl md:text-xl hover:text-cyan-500">
              <i class="fab fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>
