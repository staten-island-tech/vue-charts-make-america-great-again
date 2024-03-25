import { generate } from "@/main"
export const select = await generate()

export const data = {
    labels: [select[0][0],select[1][0],select[2][0],select[3][0],],
    datasets: [
      {
        label: 'Population',
        backgroundColor: '#f87979',
        data: select[1]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }