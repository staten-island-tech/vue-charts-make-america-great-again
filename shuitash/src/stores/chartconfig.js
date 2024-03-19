async function getdata(borough) {
  let list = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
  let data = await list.json()
  let population = []
  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  
  data.forEach((i)=>{
    if(i.borough===borough && i.year==="2010"){
      population.push(Number(i.population))
    }
  })

return(sumArray(population))
}
export const data = {
  labels: ['Brooklyn', 'Bronx', 'Queens', 'Manhattan', 'Staten Island'],
  datasets: [
    {
      backgroundColor: ['#00C0FF', '#FE7E00', '#FF00C0', '#FE0000', '#00FF41'],
      data: [await getdata("Brooklyn"), await getdata("Bronx"), await getdata("Queens"), await getdata("Manhattan"), await getdata("Staten Island")]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
