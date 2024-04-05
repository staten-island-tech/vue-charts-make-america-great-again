import { filter } from "@/main"


export const data = {
    labels: ['Brooklyn', 'Queens', 'Staten Island', 'Bronx', 'Manhattan'],
    datasets: [
      {
        label: 'Population',
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#CB42F5'],
        data: [filter("Brooklyn"), filter("Queens"), filter("Staten Island"), filter("Bronx"), filter("Manhattan")]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  