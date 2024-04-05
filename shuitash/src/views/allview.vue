<template>
    <div class="first">
        <mainbar/>
    </div>
    <div class="second">
        <mainpie/>
    </div>
    </template>
      
    <script setup>
    import mainbar from '@/components/mainbar.vue'
    import mainpie from '@/components/mainpie.vue'
    </script>
    
    <style scoped>
    .first{
        margin: 100px;
    }
    
    .second{
        height: 800px;
    }
    </style>
      