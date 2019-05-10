import { Rule } from './types';

export default function isString(message = 'must be a string'): Rule {
  return {
    isString: {
      message
    }
  };
}
