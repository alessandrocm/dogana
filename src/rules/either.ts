import { Rule } from './types';

export default function either(message: string, ...rules: Rule[]): Rule {
  return {
    either: {
      message,
      options: rules
    }
  };
}