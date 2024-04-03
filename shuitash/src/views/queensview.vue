<template>
  <div class="first">
      <queensbar/>
  </div>
  <div class="second">
      <queenspie/>
  </div>
  </template>
    
  <script setup>
  import queensbar from '@/components/queensbar.vue'
  import queenspie from '@/components/queenspie.vue'
  </script>
  
  <style scoped>
  .first{
      margin: 100px;
  }
  
  .second{
      height: 800px;
  }
  </style>
    