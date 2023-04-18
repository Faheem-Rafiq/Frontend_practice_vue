<script setup>
import { reactive } from "vue";

const plans = reactive([
  {
    name: "Basic",
    yearlyPrice: 129,
    monthlyPrice: 12,
    features: 3,
    isSelected: false,
  },
  {
    name: "Advanced",
    yearlyPrice: 299,
    monthlyPrice: 29,
    features: 5,
    isSelected: true,
  },
  {
    name: "Premium",
    yearlyPrice: 499,
    monthlyPrice: 49,
    features: 7,
    isSelected: false,
  },
]);
const features = [
  "Unlimited updates",
  "Git repository",
  "npm installation",
  "Code examples",
  "Premium snippets",
  "Premium support",
  "Drag & Drop builder",
];

function noOfFeatures(index, plan) {
  return index + 1 > plan.features ?? false;
}

function changePlan(selectedPlan) {
  plans.forEach((plan) => {
    plan.name === selectedPlan.name
      ? (plan.isSelected = true)
      : (plan.isSelected = false);
  });
}
</script>
<template>
  <div class="bg-gray-200 flex justify-center min-h-screen dark:bg-gray-800">
    <div class="mt-10 px-4 md:px-0 w-full md:w-11/12 xl:w-9/12">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold font-serif dark:text-gray-100">Pricing</h1>
        <div class="flex items-center justify-center space-x-3 my-5">
          <span
            class="text-lg font-bold text-gray-400"
            :class="{ '!text-blue-600 scale-110 dark:!text-yellow-400': !isYearly }"
            >Monthly</span
          >
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              :checked="isYearly"
              class="sr-only peer"
              @change="toggleMonYearly"
            />
            <div
              class="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
            ></div>
          </label>
          <span
            class="text-lg font-bold text-gray-400"
            :class="{ '!text-blue-600 scale-110 dark:!text-yellow-400': isYearly }"
            >Yearly</span
          >
        </div>
      </div>

      <div class="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
        <span v-for="(plan, index) in plans" :key="index" class="flex-1">
          <!-- Pricing Card -->
          <div
            class="dark:bg-gray-600"
            :class="{
              ' dark:!shadow-yellow-400 shadow-xl shadow-blue-600': plan.isSelected,
            }"
          >
            <div
              class="bg-white p-5 mb-0.5 space-y-3 dark:bg-gray-600 dark:text-gray-200"
            >
              <h2 class="font-bold text-lg text-center uppercase">{{ plan.name }}</h2>
              <div v-if="isYearly" class="text-center">
                <span class="text-3xl font-bold dark:text-yellow-400"
                  >$ {{ plan.yearlyPrice }}</span
                >
                <span class="text-gray-500 dark:text-gray-300">/year</span>
              </div>
              <div v-else class="text-center">
                <span class="text-3xl font-bold dark:text-yellow-400"
                  >$ {{ plan.monthlyPrice }}</span
                >
                <span class="text-gray-500 dark:text-gray-300">/mon</span>
              </div>
              <button
                @click="changePlan(plan)"
                :class="{
                  '!bg-blue-600 text-white dark:!bg-yellow-400 dark:text-white':
                    plan.isSelected,
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
                <span
                  v-if="noOfFeatures(index)"
                  class="text-red-600 font-bold dark:text-yellow-600"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="4.0"
                    stroke="currentColor"
                    class="w-5 h-5 text-green-500 dark:text-yellow-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="4.0"
                  stroke="currentColor"
                  class="w-5 h-5 text-red-500 dark:text-yellow-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <p
                  class="font-semibold"
                  :class="{ 'text-gray-400': noOfFeatures(index, plan) }"
                >
                  {{ feature }}
                </p>
              </li>
            </ul>
          </div>
          <!-- Pricing Card End  -->
        </span>
      </div>
    </div>
  </div>
</template>
