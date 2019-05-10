import { Rule } from './types';

export default function required(message = 'is required'): Rule {
  return {
    required: {
      message
    }
  };
}
