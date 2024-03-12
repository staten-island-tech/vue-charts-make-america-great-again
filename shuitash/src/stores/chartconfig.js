async function getdata(borough) {
  let list = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
  let data = await list.json()
  let population = []
  console.log(data)
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

async function main() {
  try {
    const sum = await getdata('Brooklyn');
    console.log(sum);
  } catch (error) {
    console.error(error);
  }
}

main();


export const data = {
  labels: ['Brooklyn', 'Bronx', 'Queens', 'Manhatten', 'Staten Island'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#DD1B17'],
      data: [main(), 20, 80, 10, 200]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
