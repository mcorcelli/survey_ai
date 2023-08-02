<template>
  <div class="survey-container">
    <h2 class="survey-title">Cognitive Finance Survey</h2>
    <p class="survey-description">
      We are conducting this survey to gain invaluable insights and deepen our understanding of how artificial intelligence is reshaping the landscape of alternative investments. By engaging professionals from diverse roles within the investment industry, we aim to explore the multifaceted applications of AI in making informed investment decisions, optimizing investment strategies, conducting advanced research, and streamlining operational processes. This survey will empower us with a comprehensive understanding of the current trends and dynamics surrounding artificial intelligence, enabling us to identify untapped opportunities, overcome challenges, and establish industry-leading practices. The data we collect will serve as a catalyst for groundbreaking research and development, driving the future of AI-driven solutions in the alternative investment space and providing stakeholders with invaluable guidance for their decision-making processes. Your participation in this survey plays a vital role in advancing our knowledge and fostering innovation within the realm of alternative investments.
    </p>

    <form @submit.prevent="submitForm" class="form-container">
      <div class="input-row two-column">
        <div class="input-container">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="form.firstName" required />
        </div>

        <div class="input-container">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="form.lastName" required />
        </div>
      </div>

      <div class="input-row two-column">
        <div class="input-container">
          <label for="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" v-model="form.jobTitle" required />
        </div>

        <div class="input-container">
          <label for="company">Company:</label>
          <input type="text" id="company" v-model="form.company" required />
        </div>
      </div>

      <div class="input-row two-column">
        <div class="input-container">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>

        <div class="input-container">
          <label for="cellPhone">Cell Phone:</label>
          <input type="tel" id="cellPhone" v-model="form.cellPhone" required />
        </div>
      </div>

    <div class="input-row">
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
    </div>

    <div class="input-row">
      <div class="input-container">
        <label>What is your primary need for using artificial intelligence to enhance due diligence? (You can select more than one)</label>
        <div class="checkbox-container">
          <div class="checkbox-option">
            <input type="checkbox" id="riskAssessment" value="Risk Assessment" v-model="form.riskAssessment">
            <label class="checkbox-label" for="riskAssessment">Risk Assessment</label>
          </div>

        <div class="input-row">
          <div class="checkbox-option">
            <input type="checkbox" id="efficiencyImprovement" value="Efficiency Improvement" v-model="form.efficiencyImprovement">
            <label class="checkbox-label" for="efficiencyImprovement">Efficiency Improvement</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="accuracyEnhancement" value="Accuracy Enhancement" v-model="form.accuracyEnhancement">
            <label class="checkbox-label" for="accuracyEnhancement">Accuracy Enhancement</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="complianceRequirements" value="Compliance Requirements" v-model="form.complianceRequirements">
            <label class="checkbox-label" for="complianceRequirements">Compliance Requirements</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="comprehensiveAnalysis" value="Comprehensive Analysis" v-model="form.comprehensiveAnalysis">
            <label class="checkbox-label" for="comprehensiveAnalysis">Comprehensive Analysis</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="realTimeMonitoring" value="Real-Time Monitoring" v-model="form.realTimeMonitoring">
            <label class="checkbox-label" for="realTimeMonitoring">Real-Time Monitoring</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="predictiveCapabilities" value="Predictive Capabilities" v-model="form.predictiveCapabilities">
            <label class="checkbox-label" for="predictiveCapabilities">Predictive Capabilities</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="scalability" value="Scalability" v-model="form.scalability">
            <label class="checkbox-label" for="scalability">Scalability</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="costReduction" value="Cost Reduction" v-model="form.costReduction">
            <label class="checkbox-label" for="costReduction">Cost Reduction</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="competitiveAdvantage" value="Competitive Advantage" v-model="form.competitiveAdvantage">
            <label class="checkbox-label" for="competitiveAdvantage">Competitive Advantage</label>
          </div>
        </div>
      </div>

    <div class="input-row">
      <div class="input-container">
        <label>To what extent do you believe that AI can significantly improve operational efficiency and decision-making in asset management? (Select one)</label>
        <div class="checkbox-container">
          <div class="checkbox-option">
            <input type="radio" id="stronglyDisagree" value="Strongly Disagree" v-model="form.aiBelief">
            <label class="checkbox-label" for="stronglyDisagree">Strongly Disagree</label>
          </div>

          <div class="input-row">
            <div class="checkbox-option">
              <input type="radio" id="disagree" value="Disagree" v-model="form.aiBelief">
              <label class="checkbox-label" for="disagree">Disagree</label>
            </div>

            <div class="checkbox-option">
              <input type="radio" id="neutral" value="Neutral" v-model="form.aiBelief">
              <label class="checkbox-label" for="neutral">Neutral</label>
            </div>

            <div class="checkbox-option">
              <input type="radio" id="agree" value="Agree" v-model="form.aiBelief">
              <label class="checkbox-label" for="agree">Agree</label>
            </div>

            <div class="checkbox-option">
              <input type="radio" id="stronglyAgree" value="Strongly Agree" v-model="form.aiBelief">
              <label class="checkbox-label" for="stronglyAgree">Strongly Agree</label>
            </div>
          </div>
        </div>
      </div>

      <div class="input-row ai-use-container">
      <div class="input-container">
        <label for="aiUse">Does your asset management company currently use AI or machine learning algorithms to optimize day-to-day operations?</label>

        <div class="ai-use-option">
          <input type="radio" id="aiUseYes" value="Yes" v-model="form.aiUse" required>
          <label for="aiUseYes">Yes</label>
        </div>

        <div class="ai-use-option">
          <input type="radio" id="aiUseNo" value="No" v-model="form.aiUse" required>
          <label for="aiUseNo">No</label>
        </div>
      </div>
    </div>    
    
    <!-- Operational Challenges Question -->
    <div class="input-row">
      <div class="input-container">
        <label>What operational challenges do you think AI could help address in your asset management processes? (Select all that apply)</label>
        <div class="checkbox-container">
          <div class="checkbox-option">
            <input type="checkbox" id="reduceManualError" value="Reduce Manual Error" v-model="form.challengeOption">
            <label class="checkbox-label" for="reduceManualError">Reduce Manual Error</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="increaseEfficiency" value="Increase Efficiency" v-model="form.challengeOption">
            <label class="checkbox-label" for="increaseEfficiency">Increase Efficiency</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="improveDecisionMaking" value="Improve Decision Making" v-model="form.challengeOption">
            <label class="checkbox-label" for="improveDecisionMaking">Improve Decision Making</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="automateProcesses" value="Automate Processes" v-model="form.challengeOption">
            <label class="checkbox-label" for="automateProcesses">Automate Processes</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="dataManagement" value="Data Management" v-model="form.challengeOption">
            <label class="checkbox-label" for="dataManagement">Data Management</label>
          </div>

          <div class="checkbox-option">
            <input type="checkbox" id="other" value="Other" v-model="form.challengeOption">
            <label class="checkbox-label" for="other">Other (please specify)</label>
          </div>

          <div class="input-container" v-if="form.challengeOption.includes('Other')">
            <textarea id="otherText" v-model="form.otherText" class="textarea" placeholder="Please specify"></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- RPA Exploration Question -->
    <div class="input-row">
      <div class="input-container">
        <label>Has your asset management company explored Robotic Process Automation (RPA) or similar technologies to streamline repetitive tasks? (Select one)</label>
        <div class="checkbox-container">
          <div class="radio-option"> <!-- Use a different CSS class for radio buttons -->
            <input type="radio" id="rpaYes" value="Yes" v-model="form.rpaExplorationOption">
            <label class="checkbox-label" for="rpaYes">Yes</label>
          </div>

          <div class="radio-option"> <!-- Use a different CSS class for radio buttons -->
            <input type="radio" id="rpaNo" value="No" v-model="form.rpaExplorationOption">
            <label class="checkbox-label" for="rpaNo">No</label>
          </div>

          <div class="radio-option"> <!-- Use a different CSS class for radio buttons -->
            <input type="radio" id="rpaUnsure" value="Unsure" v-model="form.rpaExplorationOption">
            <label class="checkbox-label" for="rpaUnsure">Unsure</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Comment Box for RPA Benefits -->
    <div class="input-row" v-if="form.rpaExplorationOption === 'Yes'">
      <div class="input-container">
        <label>If yes, what benefits were observed?</label>
        <textarea id="rpaBenefits" v-model="form.rpaBenefits" class="textarea"></textarea>
      </div>
    </div>

    <div class="input-row">
      <div class="input-container">
        <label for="openForDiscussion">Are you open for discussion?</label>
        <select id="openForDiscussion" v-model="form.openForDiscussion" required>
          <option disabled value="">Please select one</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>

    <button type="submit" class="submit-button">Submit</button>
    </form>

    <PrivacyModal v-if="showModal" @close="showModal = false">
      <h2 class="privacy-title">Privacy Statement</h2>
      <p class="privacy-description">
        <!-- privacy statement description here -->
      </p>
    </PrivacyModal>
  </div>
</template>

<script>
import PrivacyModal from '../components/PrivacyModal.vue';

<script>
import PrivacyModal from '../components/PrivacyModal.vue';

export default {
  components: {
    PrivacyModal
  },
  data() {
    return {
      showModal: true,
      form: {
        challengeOption: [],
        firstName: "",
        lastName: "",
        company: "",
        jobTitle: "",
        email: "",
        cellPhone: "",
        role: "",
        industry: "",
        usedFinancialAnalysisServices: "",
        openForDiscussion: "",
        riskAssessment: false,
        efficiencyImprovement: false,
        accuracyEnhancement: false,
        complianceRequirements: false,
        comprehensiveAnalysis: false,
        realTimeMonitoring: false,
        predictiveCapabilities: false,
        scalability: false,
        costReduction: false,
        competitiveAdvantage: false,
        aiBelief: "",
        aiUse: "",
        selectedOptions: [],
        otherSelected: false,
        otherText: "",
        rpaExploration: "",
        rpaBenefits: ""
      },
      options: [
        {id: 'reduceManualError', value: 'Reduce Manual Error', text: 'Reduce Manual Error'},
        {id: 'increaseEfficiency', value: 'Increase Efficiency', text: 'Increase Efficiency'},
        {id: 'improveDecisionMaking', value: 'Improve Decision Making', text: 'Improve Decision Making'},
        {id: 'automateProcesses', value: 'Automate Processes', text: 'Automate Processes'},
        {id: 'dataManagement', value: 'Data Management', text: 'Data Management'}
      ],
      rpaOptions: [
        {id: 'rpaYes', value: 'Yes', text: 'Yes'},
        {id: 'rpaNo', value: 'No', text: 'No'},
        {id: 'rpaUnsure', value: 'Unsure', text: 'Unsure'}
      ]
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
      // Add your form submission logic here...
    },
  },
};
</script>

<style scoped>
.survey-container {
  /* Full page */
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;
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
  max-width: 850px;
  padding: 1rem;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  box-sizing: border-box;
}

.input-row.two-column .input-container {
  flex: 1 0 45%;
  margin: 0.5rem 2.5%;
}

.input-row.two-column {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .input-container {
    flex: 0 0 100%;
    margin-right: 0;
  }
}

label {
  width: 100%;
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 0.5rem;
  text-align: left;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.checkbox-container {
  display: block;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0.5rem;
  max-width: 100%;
  column-count: 2;
  column-gap: 20px;
}

.checkbox-option {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  width: 100%;
  break-inside: avoid;
}

.checkbox-label {
  margin-left: 0.5rem;
}

.ai-belief-container {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ai-belief-container .ai-belief-option {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
}

.input-row.ai-use-container {
  margin-bottom: 20px;
}

.input-row.ai-use-container .input-container {
  display: flex;
  flex-direction: column;
}

.input-row.ai-use-container .input-container label {
  margin-bottom: 10px;
  font-size: 16px;
}

.ai-use-option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ai-use-option input[type="radio"] {
  margin-right: 10px;
}

.submit-button {
  align-self: flex-start;
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