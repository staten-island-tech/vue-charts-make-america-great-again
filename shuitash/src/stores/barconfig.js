import { generate } from "@/main"

export const select = await generate()

export const data = {
    labels: [select[0][0][0],select[0][1][0],select[0][2][0],select[0][3][0],],
    datasets: [
      {
        label: 'Population',
        backgroundColor: '#f87979',
        data: [select[0][0][1],select[0][1][1],select[0][2][1],select[0][3][1]]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }