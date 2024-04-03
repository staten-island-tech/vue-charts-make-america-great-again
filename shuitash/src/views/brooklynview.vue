<template>
    <div class="first">
        <brooklynbar/>
    </div>
    <div class="second">
        <brooklynpie/>
    </div>
    </template>
      
    <script setup>
    import brooklynbar from '@/components/brooklynbar.vue'
    import brooklynpie from '@/components/brooklynpie.vue'
    </script>
    
    <style scoped>
    .first{
        margin: 100px;
    }
    
    .second{
        height: 800px;
    }
    </style>
      