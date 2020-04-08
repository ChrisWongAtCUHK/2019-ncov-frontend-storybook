/* eslint-disable prettier/prettier */

const fatalityRate = {
  "byAge": [
    {
      "age": "80+ years old",
      "rate": "14.8%"
    },
    {
      "age": "70-79 years old",
      "rate": "8.0%"
    },
    {
      "age": "60-69 years old",
      "rate": "3.6%"
    },
    {
      "age": "50-59 years old",
      "rate": "1.3%"
    },
    {
      "age": "40-49 years old",
      "rate": "0.4%"
    },
    {
      "age": "30-39 years old",
      "rate": "0.2%"
    },
    {
      "age": "20-29 years old",
      "rate": "0.2%"
    },
    {
      "age": "10-19 years old",
      "rate": "0.2%"
    },
    {
      "age": "0-9 years old",
      "rate": "no fatalities"
    }
  ],
  "bySex": [
    {
      "sex": "Male",
      "rate": "4.7%"
    },
    {
      "sex": "Female",
      "rate": "2.8%"
    }
  ],
  "byComorbidity": [
    {
      "preExistingCondition": "Cardiovascular disease",
      "rate": "10.5%"
    },
    {
      "preExistingCondition": "Diabetes",
      "rate": "7.3%"
    },
    {
      "preExistingCondition": "Chronic respiratory disease",
      "rate": "6.3%"
    },
    {
      "preExistingCondition": "Hypertension",
      "rate": "6.0%"
    },
    {
      "preExistingCondition": "Cancer",
      "rate": "5.6%"
    },
    {
      "preExistingCondition": "no pre-existing conditions",
      "rate": "0.9%"
    }
  ]
};

module.exports = fatalityRate;
