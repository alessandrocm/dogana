import { Rule } from './types';

export default function isEmail(message = 'must be a valid email'): Rule {
  return {
    isEmail: {
      message
    }
  };
}
