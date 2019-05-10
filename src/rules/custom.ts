import { Rule, CustomOptions } from './types';

export default function custom(options: CustomOptions): Rule {
  return {
    [options.name]: {
      message: options.message,
      options: options.checker
    }
  };
}
