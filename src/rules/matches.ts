import { Rule } from './types';

export default function matches(regex: RegExp, message = 'must be a valid format'): Rule {
  return {
    matches: {
      message,
      options: regex
    }
  }
}
