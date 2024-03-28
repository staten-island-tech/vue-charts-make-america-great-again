<template>
    <div @click="compare(Thing[0])">
        <p>{{ Thing[0] }}</p>
        <p>{{Thing[2]}}</p>
    </div>
</template>

<script setup>
import { call, select } from '@/stores/barconfig';
function compare(name){
    if(name==select[1]){
    console.log(`${select[1]}`)
    call()
 }else{
    console.log("nay")
 }
}

const props = defineProps({
    Thing:Object,
})

</script>


<style scoped>
div{
    display: flex;
    border: solid;
}
</style>