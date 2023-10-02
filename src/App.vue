<template>
  <NavBar />
  <!-- <nav>
    <router-link to="/order">Order</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>

<style lang="scss" src="./scss/style.scss"></style>
