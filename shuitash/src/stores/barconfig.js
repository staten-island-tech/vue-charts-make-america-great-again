import { generate } from "@/main"

export let select = await generate()

export async function call(){
  let x = await generate()
  select = x
}
console.log(select)

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
    reactive: true,
    maintainAspectRatio: false
  }