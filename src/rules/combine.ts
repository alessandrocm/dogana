import { Rule } from './types';

export default function combine(...rules: Rule[]): Rule {
  return Object.assign({}, ...rules);
}