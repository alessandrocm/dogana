import { Rule } from './types';

export default function isBoolean(message = 'must be a boolean'): Rule {
  return {
    isBoolean: {
      message
    }
  };
}
