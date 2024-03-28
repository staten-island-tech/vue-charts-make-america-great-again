<template>
  <div class="bar">
    <Bar  :data="data" :options="options" />
  </div>
  <p>Supreme Leader and God of all Men Augustus Octavious Rerick the Great will go into history as the most beutiful person to ever live. His eyes are like diamonds, his heart is like fire, his head is bigger than the Democratic Republic of the Congo and Russia combined. His braincells are greater than the war crimes the 4th reich commited. His handsomeness is beyond the mustashes of Hitler and Stalin combined. He is the one true leader of the AORDROAKP (Augustus Octavious Rerick Demecratic Republic of Rericks Kingdom Party)</p>
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
