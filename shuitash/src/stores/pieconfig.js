import { filter } from "@/main"

export const data = {
  labels: ['Brooklyn', 'Bronx', 'Queens', 'Manhattan', 'Staten Island'],
  datasets: [
    {
      backgroundColor: ['#00C0FF', '#FE7E00', '#FF00C0', '#FE0000', '#00FF41'],
      data: [await filter("Brooklyn"), await filter("Bronx"), await filter("Queens"), await filter("Manhattan"), await filter("Staten Island")]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
