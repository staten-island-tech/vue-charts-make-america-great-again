async function getdata(borough){
  let list = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`);
  let data = await list.json();
  let population = [].reduce((a, b) => a + b, 0);
  data.filter((i)=>console.log(i.borough===borough))
  console.log(population)
}

getdata("gBrooklyn")

export const data = {
    labels: ['Brooklyn', 'Bronx', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  