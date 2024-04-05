<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="wrapper">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/all">All</RouterLink>
        <RouterLink to="/queens">Queens</RouterLink>
        <RouterLink to="/statenisland">Staten Island</RouterLink>
        <RouterLink to="/brooklyn">Brooklyn</RouterLink>
        <RouterLink to="/manhattan">Manhattan</RouterLink>
        <RouterLink to="/bronx">Bronx</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  background-color: white;
}
</style>
