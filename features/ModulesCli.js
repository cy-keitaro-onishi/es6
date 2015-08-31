import * as calc from './ModulesModule';
import {sum, diff} from './ModulesModule';

console.log('10 + 20 = %s', calc.sum(10, 20));
console.log('10 - 20 = %s', calc.diff(10, 20));
console.log('10 + 20 = %s', sum(10, 20));
console.log('10 - 20 = %s', diff(10, 20));
