<template>
  <div class="bar">
  <Bar  :data="data" :options="options" />
  </div>
  <div>
    <AnswerChoice v-for="area in select[0]" :key="area[0]" :Thing="area"/>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import * as chartConfig from '../stores/barconfig';
import { select } from '../stores/barconfig';
import AnswerChoice from '@/components/AnswerChoice.vue';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar,
    AnswerChoice
  },
  data() {
    return chartConfig
  }
}

</script>

<style scoped>
.bar{
  display: flex;
}
</style>
