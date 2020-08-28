import { FormData } from "../App";

export type ValidationFunction = (value: string | undefined) => void;

export const validateField = (
  value: string | undefined,
  regex: RegExp
): string | undefined => {
  return value?.length && regex.test(value) ? undefined : "error";
};

export interface FormFieldProps {
  name: keyof FormData;
}
