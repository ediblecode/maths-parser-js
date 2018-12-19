import { operators, operatorKeys, Operator } from "./operators";

export type NumberOrOperatorToken = number | Operator;

const splitToStringTokens =
    (input: string): string[] =>
        input.split(new RegExp(`(${ operatorKeys.join("|") })`));

export const parseSimple =
    (input: string): NumberOrOperatorToken[] =>
        splitToStringTokens(input).map(token => operators[token] || Number(token));
