<template>
  <div>

  </div>
</template>

<script>
  export default {
    
  }

  async function data(){
    let something = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
    let actualdata = something.json()
    
  }
</script>

<style lang="scss" scoped>

</style>