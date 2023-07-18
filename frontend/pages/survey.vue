<template>
  <div>
    <form @submit.prevent="submitForm">
      <!-- Form fields for each question... -->

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        role: '',
        industry: '',
        usedFinancialAnalysisServices: false,
        primaryNeed: '',
        keyFeatures: '',
        serviceTier: '',
        suggestions: '',
        pricingExpectationsStarter: 0,
        pricingExpectationsIntermediate: 0,
        pricingExpectationsAdvanced: 0,
        pricingExpectationsPremium: 0,
        usingSimilarServices: false,
        currentServicePrice: 0,
        interestedInPremiumServices: false,
        premiumServicesPrice: 0,
        additionalComments: '',
        openForDiscussion: false,
        // ... rest of your form data goes here
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await this.$axios.$post('http://localhost:1337/survey', this.form);
        // handle success (e.g. show message, clear form...)
      } catch (error) {
        // handle error (e.g. show error message)
      }
    },
  },
};
</script>