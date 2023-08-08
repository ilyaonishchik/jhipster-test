export type EntityField<T> = {
  fieldName: keyof T;
  fieldType: string;
  fieldValidateRules?: string[];
  fieldValidateRulesPattern?: string;
  fieldValidateRulesMax?: string;
  fieldValidateRulesMin?: string;
};
