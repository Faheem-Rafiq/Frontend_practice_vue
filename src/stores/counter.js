import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {

  const selectedPlan = reactive({
    name: "Advanced",
    yearlyPrice: 299,
    monthlyPrice: 29,
    features: 5,
    selectedYearly : true,
  });

  return { selectedPlan };
});
