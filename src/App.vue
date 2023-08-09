<script setup>
import { RouterView } from 'vue-router'
import HeaderNavBar from './components/HeaderNavBar.vue'
import FooterNavBar from './components/FooterNavBar.vue'
</script>

<template>
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