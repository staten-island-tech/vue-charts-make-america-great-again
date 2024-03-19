import { getdata } from "@/main"

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
