<template>
    <div class="first">
        <statenislandbar/>
    </div>
    <div class="second">
        <statenislandpie/>
    </div>
    </template>
      
    <script setup>
    import statenislandbar from '@/components/statenislandbar.vue'
    import statenislandpie from '@/components/statenislandpie.vue'
    </script>
    
    <style scoped>
    .first{
        margin: 100px;
    }
    
    .second{
        height: 800px;
    }
    </style>
      