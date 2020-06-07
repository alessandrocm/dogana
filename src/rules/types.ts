
export interface LengthOptions {
  min?: Number,
  max?: Number
}

export type CustomChecker = (obj: any, value: any) => boolean;

export interface CustomOptions {
  name: string;
  message: string;
  checker: CustomChecker;
}

export type CheckOptions = CustomChecker | LengthOptions | RegExp | Rule[];

export interface RuleOptions {
  message: string;
  options?: CheckOptions
}

export interface Rule {
  [name: string]: RuleOptions;
}

export interface ObjectRules {
  [property: string]: Rule
}
