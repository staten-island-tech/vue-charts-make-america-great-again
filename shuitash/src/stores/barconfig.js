import { generate } from "@/main"

const select1 = []
export const select = select1[0]

async function call(){
  let select2 = await generate()
  select1.push(select2)
}


call()
select1.forEach((i)=>console.log(i))


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