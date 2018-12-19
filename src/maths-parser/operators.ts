export type Operator = (x: number, y: number) => number;

export interface IOperators {
    readonly a: Operator;
    readonly b: Operator;
    readonly c: Operator;
    readonly d: Operator;
    readonly [key: string]: Operator;
}

export const operators: IOperators = {
    a: (x, y) => x + y,
    b: (x, y) => x - y,
    c: (x, y) => x * y,
    d: (x, y) => x / y
};

export const operatorKeys: string[] = Object.keys(operators);

export default operators;