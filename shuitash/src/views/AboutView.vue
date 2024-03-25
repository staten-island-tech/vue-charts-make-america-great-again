<template>
  <div class="bar">
  <Bar  :data="data" :options="options" />
  </div>
  <div>
    <AnswerChoice v-for="choices in select[0]" :key="choices[0]" :Thing="choices"/>
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

</style>../stores/barconfig
