import { Rule } from './types';

export default function isDate(message = 'must be a valid date'): Rule {
  return {
    isDate: {
      message
    }
  };
}
