import { Rule } from './types';

export default function isObject(message = 'must be an object') {
  return {
    isObject: {
      message
    }
  };
}
