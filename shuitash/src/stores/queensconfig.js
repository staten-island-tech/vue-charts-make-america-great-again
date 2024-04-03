import { twodata } from "@/main"
const stuff = await twodata("Queens")
console.log(stuff)

export const data = {
    labels: stuff.name,
    datasets: [
      {
        label: 'Population',
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: stuff.population,
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  