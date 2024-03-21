import { generate } from "@/main"
export const select = await generate()

export const data = {
    labels: select[0],
    datasets: [
      {
        label: 'Population',
        backgroundColor: '#f87979',
        data: [select[1][0], select[1][1], select[1][2], select[1][3]]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }