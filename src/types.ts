
export interface ValidationErrors {
  [key : string] : Array<any>;
}

export interface Validation {
  valid : boolean;
  message? : string;
  errors? : ValidationErrors;
}
