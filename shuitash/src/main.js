import './assets/main.css'

import { createApp } from 'vue'
import { acceptHMRUpdate, createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

async function data1(){
    
    try{
      let something = await fetch(`https://data.cityofnewyork.us/resource/swpk-hqdp.json`)
      let actualdata = something.json()
      return actualdata

    }catch{
      console.log('erorr')
    }
    
  }
data1()
  let data = await actualdata()
  console.log(data)






