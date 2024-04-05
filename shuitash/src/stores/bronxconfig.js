import { twodata } from "@/main"
let stuff = twodata("Bronx")

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
  