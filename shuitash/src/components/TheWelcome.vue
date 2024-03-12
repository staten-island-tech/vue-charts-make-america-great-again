<template>
  <div></div>
</template>

<script>
export default {}
async function getdata() {
  let list = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
  let data = await list.json()
}

getdata()
</script>

<style lang="scss" scoped></style>
