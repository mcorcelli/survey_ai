<template>
  <div>
    <div class="survey-container">
      <h2 class="survey-title">
        Cognitive Finance Survey
      </h2>
      <p class="survey-description-container">
        We are conducting this survey to gain invaluable insights and deepen our understanding of how artificial intelligence is reshaping the landscape of alternative investments. By engaging professionals from diverse roles within the investment industry, we aim to explore the multifaceted applications of AI in making informed investment decisions, optimizing investment strategies, conducting advanced research, and streamlining operational processes. This survey will empower us with a comprehensive understanding of the current trends and dynamics surrounding artificial intelligence, enabling us to identify untapped opportunities, overcome challenges, and establish industry-leading practices. The data we collect will serve as a catalyst for groundbreaking research and development, driving the future of AI-driven solutions in the alternative investment space and providing stakeholders with invaluable guidance for their decision-making processes. Your participation in this survey plays a vital role in advancing our knowledge and fostering innovation within the realm of alternative investments.
      </p>

      <form class="form-container" @submit.prevent="submitForm">
        <div class="input-row two-column">
          <div class="input-container">
            <label for="firstName">First Name:</label>
            <input id="firstName" v-model="form.firstName" type="text" required>
          </div>

        <div class="input-row two-column">
          <div class="input-container">
            <label for="lastName">Last Name:</label>
            <input id="lastName" v-model="form.lastName" type="text" required>
          </div>
        </div>

        <div class="input-row two-column">
          <div class="input-container">
            <label for="jobTitle">Job Title:</label>
            <input id="jobTitle" v-model="form.jobTitle" type="text" required>
          </div>

        <div class="input-row two-column">
          <div class="input-container">
            <label for="company">Company:</label>
            <input id="company" v-model="form.company" type="text" required>
          </div>
        </div>

        <div class="input-row two-column">
          <div class="input-container">
            <label for="email">Email:</label>
            <input id="email" v-model="form.email" type="email" required>
          </div>

          <div class="input-container">
            <label for="cellPhone">Cell Phone:</label>
            <input id="cellPhone" v-model="form.cellPhone" type="tel" required>
          </div>
        </div>

        <div class="input-row">
          <div class="input-container">
            <label for="role">Functional Role:</label>
            <select id="role" v-model="form.role">
              <option disabled value="">
                Please select one
              </option>
              <option>Investments</option>
              <option>Operations</option>
              <option>Business Development</option>
              <option>Investor Relations</option>
            </select>
          </div>
        </div>

        <div class="input-row">
          <div class="input-container">
            <label>What is your primary need for using artificial intelligence to raise capital? (You can select more than one)</label>
            <div class="checkbox-container">
              <div class="checkbox-option">
                <input id="leadGeneration" v-model="form.leadGeneration" type="checkbox" value="Lead Generation">
                <label class="checkbox-label" for="leadGeneration">Lead Generation</label>
              </div>

              <div class="input-row">
                <div class="checkbox-option">
                  <input id="efficiencyImprovement" v-model="form.efficiencyImprovement" type="checkbox" value="Efficiency Improvement">
                  <label class="checkbox-label" for="efficiencyImprovement">Efficiency Improvement</label>
                </div>

                <div class="checkbox-option">
                  <input id="customCommunication" v-model="form.customCommunication" type="checkbox" value="Custom Communication">
                  <label class="checkbox-label" for="customCommunication">Custom Communication</label>
                </div>

                <div class="checkbox-option">
                  <input id="databaseOrganization" v-model="form.databaseOrganization" type="checkbox" value="Database Organization">
                  <label class="checkbox-label" for="databaseOrganization">Database Organization</label>
                </div>

                <div class="checkbox-option">
                  <input id="marketingAutomation" v-model="form.marketingAutomation" type="checkbox" value="Marketing Automation">
                  <label class="checkbox-label" for="marketingAutomation">Marketing Automation</label>
                </div>

                <div class="checkbox-option">
                  <input id="realTimeCommunication" v-model="form.realTimeCommunication" type="checkbox" value="Real-Time Communication">
                  <label class="checkbox-label" for="realTimeCommunication">Real-Time Communication</label>
                </div>

                <div class="checkbox-option">
                  <input id="predictiveCapabilities" v-model="form.predictiveCapabilities" type="checkbox" value="Predictive Capabilities">
                  <label class="checkbox-label" for="predictiveCapabilities">Predictive Capabilities</label>
                </div>

                <div class="checkbox-option">
                  <input id="scalablePersonalization" v-model="form.scalablePersonalization" type="checkbox" value="Scalable Personalization">
                  <label class="checkbox-label" for="scalability">Scalability</label>
                </div>

                <div class="checkbox-option">
                  <input id="costReduction" v-model="form.costReduction" type="checkbox" value="Cost Reduction">
                  <label class="checkbox-label" for="costReduction">Cost Reduction</label>
                </div>

                <div class="checkbox-option">
                  <input id="competitiveAdvantage" v-model="form.competitiveAdvantage" type="checkbox" value="Competitive Advantage">
                  <label class="checkbox-label" for="competitiveAdvantage">Competitive Advantage</label>
                </div>
              </div>
            </div>

            <div class="input-row">
            <div class="input-container">
                <label>How do you envision AI being incorporated into your capital raising processes?</label>
                <textarea id="aiCapitalRaising" v-model="form.aiCapitalRaising" rows="4" cols="50"></textarea>
            </div>
            </div>

            <div class="input-row">
              <div class="input-container">
                <label>To what extent do you believe that AI can significantly improve capital raising efficiency and investor relations? (Select one)</label>
                <div class="checkbox-container">
                  <div class="checkbox-option">
                    <input id="stronglyDisagree" v-model="form.aiBelief" type="radio" value="Strongly Disagree">
                    <label class="checkbox-label" for="stronglyDisagree">Strongly Disagree</label>
                  </div>

                  <div class="input-row">
                    <div class="checkbox-option">
                      <input id="disagree" v-model="form.aiBelief" type="radio" value="Disagree">
                      <label class="checkbox-label" for="disagree">Disagree</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="neutral" v-model="form.aiBelief" type="radio" value="Neutral">
                      <label class="checkbox-label" for="neutral">Neutral</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="agree" v-model="form.aiBelief" type="radio" value="Agree">
                      <label class="checkbox-label" for="agree">Agree</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="stronglyAgree" v-model="form.aiBelief" type="radio" value="Strongly Agree">
                      <label class="checkbox-label" for="stronglyAgree">Strongly Agree</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="input-row ai-use-container">
                <div class="input-container">
                  <label for="aiUse">Does your asset management company currently use AI or machine learning algorithms to optimize day-to-day marketing and communications?</label>

                  <div class="ai-use-option">
                    <input id="aiUseYes" v-model="form.aiUse" type="radio" value="Yes" required>
                    <label for="aiUseYes">Yes</label>
                  </div>

                  <div class="ai-use-option">
                    <input id="aiUseNo" v-model="form.aiUse" type="radio" value="No" required>
                    <label for="aiUseNo">No</label>
                  </div>
                </div>
              </div>
      
              <!-- Capital Raising Challenges Question -->
              <div class="input-row">
                <div class="input-container">
                  <label>What challenges do you think AI could help address in your business development processes? (Select all that apply)</label>
                  <div class="checkbox-container">
                    <div class="checkbox-option">
                      <input id="reduceManualError" v-model="form.challengeOption" type="checkbox" value="Reduce Manual Error">
                      <label class="checkbox-label" for="reduceManualError">Reduce Manual Error</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="increaseEfficiency" v-model="form.challengeOption" type="checkbox" value="Increase Efficiency">
                      <label class="checkbox-label" for="increaseEfficiency">Increase Efficiency</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="improveDecisionMaking" v-model="form.challengeOption" type="checkbox" value="Improve Decision Making">
                      <label class="checkbox-label" for="improveDecisionMaking">Improve Decision Making</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="automateProcesses" v-model="form.challengeOption" type="checkbox" value="Automate Processes">
                      <label class="checkbox-label" for="automateProcesses">Automate Processes</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="dataManagement" v-model="form.challengeOption" type="checkbox" value="Data Management">
                      <label class="checkbox-label" for="dataManagement">Data Management</label>
                    </div>

                    <div class="checkbox-option">
                      <input id="other" v-model="form.challengeOption" type="checkbox" value="Other">
                      <label class="checkbox-label" for="other">Other (please specify)</label>
                    </div>

                    <div v-if="form.challengeOption.includes('Other')" class="input-container">
                      <textarea id="otherText" v-model="form.otherText" class="textarea" placeholder="Please specify" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- RPA Exploration Question -->
              <div class="input-row">
                <div class="input-container">
                  <label>Has your firm explored Robotic Process Automation (RPA) or similar technologies to streamline repetitive tasks? (Select one)</label>
                  <div class="checkbox-container">
                    <div class="radio-option">
                      <!-- Use a different CSS class for radio buttons -->
                      <input id="rpaYes" v-model="form.rpaExplorationOption" type="radio" value="Yes">
                      <label class="checkbox-label" for="rpaYes">Yes</label>
                    </div>

                    <div class="radio-option">
                      <!-- Use a different CSS class for radio buttons -->
                      <input id="rpaNo" v-model="form.rpaExplorationOption" type="radio" value="No">
                      <label class="checkbox-label" for="rpaNo">No</label>
                    </div>

                    <div class="radio-option">
                      <!-- Use a different CSS class for radio buttons -->
                      <input id="rpaUnsure" v-model="form.rpaExplorationOption" type="radio" value="Unsure">
                      <label class="checkbox-label" for="rpaUnsure">Unsure</label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comment Box for RPA Benefits -->
              <div v-if="form.rpaExplorationOption === 'Yes'" class="input-row">
                <div class="input-container">
                  <label>If yes, what benefits were observed?</label>
                  <textarea id="rpaBenefits" v-model="form.rpaBenefits" class="textarea" />
                </div>
              </div>

              <div class="input-row">
                <div class="input-container">
                  <label for="aiIntegration">How do you envision AI being integrated into your business development and investor relations workflows?</label>
                  <textarea id="aiIntegration" v-model="form.aiIntegration" class="textarea" required></textarea>
                </div>
              </div>

              <div class="input-row">
                <div class="input-container">
                  <label>How likely is your firm to invest in AI technology for business development improvements?</label>
                  <div class="radio-option">
                    <input id="notLikely" v-model="form.aiInvestmentLikelihood" type="radio" value="Not Likely">
                    <label for="notLikely">Not Likely</label>
                  </div>
                  <div class="radio-option">
                    <input id="somewhatLikely" v-model="form.aiInvestmentLikelihood" type="radio" value="Somewhat Likely">
                    <label for="somewhatLikely">Somewhat Likely</label>
                  </div>
                  <div class="radio-option">
                    <input id="neutral" v-model="form.aiInvestmentLikelihood" type="radio" value="Neutral">
                    <label for="neutral">Neutral</label>
                  </div>
                  <div class="radio-option">
                    <input id="likely" v-model="form.aiInvestmentLikelihood" type="radio" value="Likely">
                    <label for="likely">Likely</label>
                  </div>
                  <div class="radio-option">
                    <input id="highlyLikely" v-model="form.aiInvestmentLikelihood" type="radio" value="Highly Likely">
                    <label for="highlyLikely">Highly Likely</label>
                  </div>
                </div>
              </div>

              <div class="input-row">
                <div class="input-container">
                  <label for="aiEnhancement">Which specific business development tasks or investor relations processes do you believe could be most enhanced through AI implementation?</label>
                  <textarea id="aiEnhancement" v-model="form.aiEnhancement" required></textarea>
                </div>
              </div>

              <div class="input-row">
                <div class="input-container">
                  <label for="aiTaskPercentage">What percentage of your business development and investor relations tasks do you estimate could be automated with AI?</label>
                  <input id="aiTaskPercentage" v-model.number="form.aiTaskPercentage" type="number" min="0" max="100" required>
                </div>
              </div>

              <div class="input-row">
                <div class="input-container">
                  <label>To what extent do you agree with the statement: "AI integration will significantly boost business development and investor relations performance while reduce costs"? (Select one)</label>
                  <div class="checkbox-container">
                    <div class="radio-option">
                      <input id="stronglyDisagreeCost" v-model="form.aiCostBelief" type="radio" value="Strongly Disagree">
                      <label class="checkbox-label" for="stronglyDisagreeCost">Strongly Disagree</label>
                    </div>

                    <div class="radio-option">
                      <input id="disagreeCost" v-model="form.aiCostBelief" type="radio" value="Disagree">
                      <label class="checkbox-label" for="disagreeCost">Disagree</label>
                    </div>

                    <div class="radio-option">
                      <input id="neutralCost" v-model="form.aiCostBelief" type="radio" value="Neutral">
                      <label class="checkbox-label" for="neutralCost">Neutral</label>
                    </div>

                    <div class="radio-option">
                      <input id="agreeCost" v-model="form.aiCostBelief" type="radio" value="Agree">
                      <label class="checkbox-label" for="agreeCost">Agree</label>
                    </div>

                    <div class="radio-option">
                      <input id="stronglyAgreeCost" v-model="form.aiCostBelief" type="radio" value="Strongly Agree">
                      <label class="checkbox-label" for="stronglyAgreeCost">Strongly Agree</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="input-row">
                <div class="input-container">
                  <label>Would your firm be interested in piloting an AI-driven solution to improve business development and investor relations efficiency? (Yes/No)</label>
                  <div class="ai-use-option">
                    <input id="aiPilotYes" v-model="form.aiPilot" type="radio" value="Yes" required>
                    <label for="aiPilotYes">Yes</label>
                  </div>

                  <div class="ai-use-option">
                    <input id="aiPilotNo" v-model="form.aiPilot" type="radio" value="No" required>
                    <label for="aiPilotNo">No</label>
                  </div>
                </div>
              </div>

              <div class="input-row">
                <div class="input-container">
                  <label for="openForDiscussion">Are you open for discussion?</label>
                  <select id="openForDiscussion" v-model="form.openForDiscussion" required>
                    <option disabled value="">
                      Please select one
                    </option>
                    <option value="yes">
                      Yes
                    </option>
                    <option value="no">
                      No
                    </option>
                  </select>
                </div>
              </div>

              <button type="submit" class="submit-button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <PrivacyModal v-if="showModal" @close="showModal = false">
      <h2 class="privacy-title" style="font-weight:bold;">
        Privacy Statement
      </h2>
      <p class="privacy-description">
        Your privacy is important to us. We handle your personal information responsibly and in accordance with our privacy policy.
      </p>
    </PrivacyModal>
  </div>
</template>

export default {
  components: {
    PrivacyModal
  },
  data() {
    return {
      showModal: true,
      form: {
        role: "",
        leadGeneration: false,
        efficiencyImprovement: false,
        customCommunication: false,
        databaseOrganization: false,
        marketingAutomation: false,
        realTimeCommunication: false,
        predictiveCapabilities: false,
        scalablePersonalization: false,
        costReduction: false,
        competitiveAdvantage: false,
        aiCapitalRaising: "",
        aiBelief: "",
        aiUse: "",
        rpaExplorationOption: "",
        rpaBenefits: "",
        aiIntegration: "",
        aiInvestmentLikelihood: "",
        aiEnhancement: "",
        aiTaskPercentage: "",
        aiCostBelief: "",
        aiPilot: "",
        openForDiscussion: ""
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
      // Add your form submission logic here...
    }
  }
};

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
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.survey-description-container {
  margin-left: 4.5rem;
  margin-right: 4.5rem;
  box-sizing: border-box;
  text: justify;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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