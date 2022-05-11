<template>
  <div class="container max-w-7xl pt-10">
    <nav class="nav w-full mx-auto p-8 bg-white flex items-center justify-between rounded-lg">
      <Logo width="120"/>
      <div class="flex space-x-6 lg:space-x-10 items-center">
        <router-link to="/">Home</router-link>
        <router-link to="/signin">Login</router-link>
        <router-link to="/signup">
          <AppButton>Sign up</AppButton>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "@/components/global/Logo";
import AppButton from "@/components/global/Button";

export default {
  name: "Navbar",
  components: { AppButton, Logo }
}
</script>
