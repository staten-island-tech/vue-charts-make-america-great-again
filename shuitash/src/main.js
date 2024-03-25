import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


async function getdata(){
  try{
    let list = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
    let data = await list.json()
    return(data)
  }
    catch{
      console.log("gg")
    }
}

export async function filter(borough) {
    let data = await getdata()
    let population = []
    function sumArray(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    }
    
    data.forEach((i)=>{
      if(i.borough===borough && i.year==="2010"){
        population.push(Number(i.population))
      }
    })
  
  return(sumArray(population))
}

export async function generate(){
  let data = await getdata()
  let pool = []
  let choices = []
  let population = []
  let answer = []
  data.forEach((i)=>{
    if(i.year==="2010"){
      pool.push(i)
    }
  })
  
  for(let i=0;i<4;i++){
    let gen = pool[Math.floor(Math.random()*pool.length)]
    choices.push(gen.nta_name)
    population.push(gen.population)
  }

  for(let i=0;i<4;i++){
    if(Number(population[i])===Math.max(...population)){
      answer.push(choices[i])
    }
  }
  return[choices,population,answer]
}

