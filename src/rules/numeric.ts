import { Rule } from './types';

export default function isNumeric(message = 'must be numeric'): Rule {
  return {
    isNumeric: {
      message
    }
  };
}
