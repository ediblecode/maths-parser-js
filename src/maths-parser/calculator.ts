import { parseSimple, NumberOrOperatorToken } from "./parser";

const bracketlessTokenReducer =
    (result: number,
        token: NumberOrOperatorToken,
        index: number,
        tokenArray: NumberOrOperatorToken[]) => {
            if (typeof token === "number")
                return result;

            return token.call(null, result, <number>tokenArray[index + 1]);
        };

/**
 * Calculates the numerical result of an expression, without brackets
 * 
 * @param input The string to parse and calculate
 */
export const calculateSimple =
    (input: string): number => {
        const tokens = parseSimple(input);
        return tokens.reduce(bracketlessTokenReducer, <number>tokens[0]);
    };