<script setup>
import { RouterView } from 'vue-router'
import HeaderNavBar from './components/HeaderNavBar.vue'
import FooterNavBar from './components/FooterNavBar.vue'
</script>

<template>
  <div class="alert alert-warning text-center" role="alert">
  <div>
    This site in development!
  </div>
</div>
  <HeaderNavBar />
  <RouterView />
  <FooterNavBar />
</template>

<style>
@media (min-width: 768px) {
  .w-md-25 {
    width: 25% !important;
  }
}
</style>