<script setup>
import { ref, watch, reactive, computed } from "vue";
import PricingCard from "../components/PricingCard.vue";
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const isYearly = ref(true);

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

function changePlan(selectedPlan) {
  plans.forEach((plan) => {
    plan.name === selectedPlan.name
      ? (plan.isSelected = true)
      : (plan.isSelected = false);
  });
}

function toggleMonYearly() {
  isYearly.value = !isYearly.value;
}
</script>
<template>
  <div class="bg-gray-200 flex justify-center min-h-screen dark:bg-gray-800">
    <button
      @click="toggleDark()"
      class="dark:text-white text-black font-bold absolute top-4 right-6 md:top-5 md:right-10"
    >
      <Icon
        v-if="!isDark"
        icon="material-symbols:dark-mode"
        class="w-10 h-10 p-2 rounded-full hover:bg-gray-300"
      />
      <Icon
        v-else
        icon="material-symbols:light-mode-outline"
        class="w-10 h-10 p-2 rounded-full hover:bg-gray-700"
      />
    </button>
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
          <PricingCard :plan="plan" :isYearly="isYearly" @changePlan="changePlan(plan)" />
        </span>
      </div>
    </div>
  </div>
</template>
