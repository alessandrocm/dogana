import { Rule } from './types';

export default function isArray(message = 'must be an array'): Rule {
  return {
    isArray: {
      message
    }
  };
}