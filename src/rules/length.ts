import { Rule, LengthOptions } from './types';

export default function isLength(
    options: LengthOptions = {min: 1}, 
    message = 'must be the correct length'): Rule {

  return {
    isLength: {
      message,
      options
    }
  };

}
