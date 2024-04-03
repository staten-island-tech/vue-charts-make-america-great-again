<template>
<div class="first">
    <manhattanbar/>
</div>
<div class="second">
    <manhattanpie/>
</div>
</template>
  
<script setup>
import manhattanbar from '@/components/manhattanbar.vue'
import manhattanpie from '@/components/manhattanpie.vue'
</script>

<style scoped>
.first{
    margin: 100px;
}

.second{
    height: 800px;
}
</style>
  