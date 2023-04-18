<script setup>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';


const { plan, isYearly} = defineProps(["plan", "isYearly"]);
defineEmits('changePlan');
const features = [
  "Unlimited updates",
  "Git repository",
  "npm installation",
  "Code examples",
  "Premium snippets",
  "Premium support",
  "Drag & Drop builder",
];

function noOfFeatures(index) {
  return index + 1 > plan.features ?? false;
}
</script>

<template>
  <!-- Pricing Card -->
  <div class="dark:bg-gray-600" :class="{' dark:!shadow-yellow-400 shadow-xl shadow-blue-600' : plan.isSelected}">
    <div class="bg-white p-5 mb-0.5 space-y-3 dark:bg-gray-600 dark:text-gray-200">
      <h2 class="font-bold text-lg text-center uppercase">{{ plan.name }}</h2>
      <div v-if="isYearly" class="text-center">
        <span class="text-3xl font-bold dark:text-yellow-400">$ {{ plan.yearlyPrice }}</span>
        <span class="text-gray-500 dark:text-gray-300">/year</span>
      </div>
      <div v-else class="text-center">
        <span class="text-3xl font-bold dark:text-yellow-400">$ {{ plan.monthlyPrice }}</span>
        <span class="text-gray-500 dark:text-gray-300">/mon</span>
      </div>
      <button
        @click="$emit('changePlan', plan)"
        :class="{
          '!bg-blue-600 text-white dark:!bg-yellow-400 dark:text-white': plan.isSelected,
        }"
        class="text-center py-1 bg-gray-100 rounded-sm w-full text-blue-500 font-bold hover:bg-blue-600 hover:text-white transition-all duration-500 dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-yellow-500 dark:hover:text-white"
      >
        Buy
      </button>
    </div>
    <ul class="bg-white p-5 space-y-4 dark:bg-gray-600 dark:text-white">
      <li
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-center space-x-1"
      >
        <span v-if="noOfFeatures(index)" class="text-red-600 font-bold dark:text-yellow-600"
          ><Icon icon="basil:cross-solid" class="w-8 h-8"/>
        </span>
        <Icon 
            icon="material-symbols:check-small"
          v-else
          class=" text-green-600 w-8 h-8 dark:text-yellow-400"
          />
        <p class="font-semibold" :class="{ 'text-gray-400': noOfFeatures(index) }">
          {{ feature }}
        </p>
      </li>
    </ul>
  </div>
  <!-- Pricing Card End  -->
</template>
