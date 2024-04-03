<template>
    <div class="first">
        <bronxbar/>
    </div>
    <div class="second">
        <bronxpie/>
    </div>
    </template>
      
    <script setup>
    import bronxbar from '@/components/bronxbar.vue'
    import bronxpie from '@/components/bronxpie.vue'
    </script>
    
    <style scoped>
    .first{
        margin: 100px;
    }
    
    .second{
        height: 800px;
    }
    </style>
      