import { INPUT_PATTERN } from "./constans";

export const isValidValue = (value: string) => INPUT_PATTERN.test(value)