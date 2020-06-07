import { ObjectRules, Rule } from "./rules/types";
import { isNilOrEmpty } from "./utilities";
import { Validation } from "./types";
import validate from "./validate";

function getOptions(rules: Rule, name: string) {
  return (rules && rules[name] && rules[name].options);
}

function propertyPasses(property: string, subject: object, rules: Rule) {

  return (checks: object, ruleName: string) => {

    const passes = validate(subject[property], ruleName, getOptions(rules, ruleName), subject);
    return {passes, ruleName};
  
  };

}

function validateProperty(subject: object, property: string, rules: Rule): Validation {
  if (isNilOrEmpty(rules)) {
    return {valid: true};
  }

  const results = Object.keys(rules).reduce(propertyPasses(property, subject, rules), true)

  return {valid: passes};

}

export default function validateObject(subject: object, rules: ObjectRules): Validation {

  if (isNilOrEmpty(subject)) {
    return {valid: false, message: 'object is null or empty'};
  }

  return Object.keys(rules).reduce((validation: Validation, property: string) => {

    const current = validateProperty(subject, property, rules[property]);
    return {valid: validation.valid && current.valid};

  }, {valid: true});

}
