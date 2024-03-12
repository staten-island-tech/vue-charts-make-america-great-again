<template>
  <div>

  </div>
</template>

<script>
  export default {
    
  }

  async function data(){
    
    try{
      let something = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
      let actualdata = something.json()
      actualdata.forEach((i)=>console.log(i))

    }catch{
      console.log('erorr')

    }
    
  }
  data()
</script>

<style lang="scss" scoped>

</style>