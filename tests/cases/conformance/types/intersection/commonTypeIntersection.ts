// @strict: true
declare let x1: { __typename?: 'TypeTwo' } & { a: boolean };
let y1: { __typename?: 'TypeOne' } & { a: boolean} = x1;  // No error!
declare let x2: { __typename?: 'TypeTwo' } & string;
let y2: { __typename?: 'TypeOne' } & string = x2;  // No error!
