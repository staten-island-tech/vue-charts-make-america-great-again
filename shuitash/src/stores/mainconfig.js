import { filter } from "@/main"

export const data = {
    labels: ['Brooklyn', 'Queens', 'Staten Island', 'Bronx', 'Manhattan'],
    datasets: [
      {
        label: 'Population',
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#CB42F5'],
        data: [await filter("Brooklyn"), await filter("Queens"), await filter("Staten Island"), await filter("Bronx"), await filter("Manhattan")]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  