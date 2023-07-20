<template>
  <div class="survey-container">
    <h2 class="survey-title">Cognitive Finance Survey</h2>
    <p class="survey-description">
      We are conducting this survey to gain invaluable insights and deepen our understanding of how artificial intelligence is reshaping the landscape of alternative investments. By engaging professionals from diverse roles within the investment industry, we aim to explore the multifaceted applications of AI in making informed investment decisions, optimizing investment strategies, conducting advanced research, and streamlining operational processes. This survey will empower us with a comprehensive understanding of the current trends and dynamics surrounding artificial intelligence, enabling us to identify untapped opportunities, overcome challenges, and establish industry-leading practices. The data we collect will serve as a catalyst for groundbreaking research and development, driving the future of AI-driven solutions in the alternative investment space and providing stakeholders with invaluable guidance for their decision-making processes. Your participation in this survey plays a vital role in advancing our knowledge and fostering innovation within the realm of alternative investments.
    </p>

    <form @submit.prevent="submitForm" class="form-container">
      <div class="input-container">
        <label for="role">Role:</label>
        <select id="role" v-model="form.role">
          <option disabled value="">Please select one</option>
          <option>Portfolio Strategist</option>
          <option>Deal Origination Specialist</option>
          <option>Transaction Manager</option>
          <option>Risk and Quantitative Solutions Manager</option>
          <option>Investment Performance Analyst</option>
          <option>Asset Manager</option>
          <option>Director of Business Strategy and Operations</option>
          <option>Capital Raising Specialist</option>
          <option>Client Services Specialist</option>
          <option>Legal Counsel</option>
          <option>Fund Operations Manager</option>
          <option>Data Scientist</option>
          <option>ESG Specialist</option>
          <option>Real Estate Asset Manager</option>
          <option>Securities Trader</option>
          <option>Fund of Funds Analyst</option>
          <option>Fund Controller</option>
          <option>Director of Valuation</option>
          <option>Treasury Manager</option>
          <option>Investment Reporting Analyst</option>
          <option>Corporate Development Manager</option>
          <option>Investment Due Diligence Director</option>
          <option>Tax Manager</option>
          <option>Distribution Director</option>
          <option>Trade Operations Specialist</option>
        </select>
      </div>

      <div class="input-container">
        <label for="usedFinancialAnalysisServices">Have you used artificial intelligence to help you make investment decisions before?</label>
        <select id="usedFinancialAnalysisServices" v-model="form.usedFinancialAnalysisServices" required>
          <option disabled value="">Please select one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div class="input-container">
        <label for="primaryNeed">What is your primary need for using artificial intelligence to enhance due diligence? (Please select one)</label>
        <select id="primaryNeed" v-model="form.primaryNeed" required>
          <option disabled value="">Please select one</option>
          <option value="riskAssessment">Risk Assessment</option>
          <option value="efficiencyImprovement">Efficiency Improvement</option>
          <option value="accuracyEnhancement">Accuracy Enhancement</option>
          <option value="complianceRequirements">Compliance Requirements</option>
          <option value="comprehensiveAnalysis">Comprehensive Analysis</option>
          <option value="realTimeMonitoring">Real-Time Monitoring</option>
          <option value="predictiveCapabilities">Predictive Capabilities</option>
          <option value="scalability">Scalability</option>
          <option value="costReduction">Cost Reduction</option>
          <option value="competitiveAdvantage">Competitive Advantage</option>
        </select>
      </div>

      <div class="input-container">
        <label>What is your primary need for using artificial intelligence to enhance due diligence? (You can select more than one)</label>
        <div class="checkbox-container">
          <div class="checkbox-option">
            <input type="checkbox" id="riskAssessment" value="Risk Assessment" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="riskAssessment">Risk Assessment</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="efficiencyImprovement" value="Efficiency Improvement" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="efficiencyImprovement">Efficiency Improvement</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="accuracyEnhancement" value="Accuracy Enhancement" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="accuracyEnhancement">Accuracy Enhancement</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="complianceRequirements" value="Compliance Requirements" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="complianceRequirements">Compliance Requirements</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="comprehensiveAnalysis" value="Comprehensive Analysis" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="comprehensiveAnalysis">Comprehensive Analysis</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="realTimeMonitoring" value="Real-Time Monitoring" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="realTimeMonitoring">Real-Time Monitoring</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="predictiveCapabilities" value="Predictive Capabilities" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="predictiveCapabilities">Predictive Capabilities</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="scalability" value="Scalability" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="scalability">Scalability</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="costReduction" value="Cost Reduction" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="costReduction">Cost Reduction</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="competitiveAdvantage" value="Competitive Advantage" v-model="form.primaryNeeds">
            <label class="checkbox-label" for="competitiveAdvantage">Competitive Advantage</label>
          </div>
        </div>
      </div>

      <div class="input-container">
        <label for="openForDiscussion">Are you open for discussion?</label>
        <select id="openForDiscussion" v-model="form.openForDiscussion" required>
          <option disabled value="">Please select one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        role: "",
        industry: "",
        usedFinancialAnalysisServices: "",
        openForDiscussion: "",
        primaryNeed: [],
        riskAssessment: false,
        accuracyEnhancement: false,
        efficiencyImprovement: false,
        complianceRequirements: false,
        comprehensiveAnalysis: false,
        realTimeMonitoring: false,
        predictiveCapabilities: false,
        scalability: false,
        costReduction: false,
        competitiveAdvantage: false,
      },
    };
  },

  methods: {
    submitForm() {
      console.log(this.form);
      // You can perform additional actions with the form data, such as sending it to a server or storing it in a database
    },
  }
};

</script>

<style scoped>
.survey-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.survey-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.survey-description {
  text-align: justify;
  margin-bottom: 1rem;
  margin-left: 3.5rem;
  margin-right: 3.5rem;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 500px;
  padding: 1rem;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 0.5rem;
}

input[type="text"],
select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.checkbox-container {
  display: flex;
  flex-direction: column;
}

.checkbox-option {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.checkbox-label {
  margin-left: 0.5rem;
}

.submit-button {
  padding: 0.5rem 1rem;
  color: white;
  background-color: #444;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #666;
}
</style>