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
    let list = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
    let data = await list.json()
}

export async function getdata(borough) {
    let list = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
    let data = await list.json()
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

