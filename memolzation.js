'use strict';

const strKey = item => item.toString() + '(' + typeof item + ')';
const generateKey = args => args.map(strKey).join(',');


const memolzation = func => {
    const cache = {};
   
    return (...args) => {
        const key = generateKey(args); 
        const val = cache[key];
        console.log(val);
        if (val) return val;
        const result = func(...args); 
        cache[key] = result;
        return result;
    }
}

const foo = (a, b) => {
    let res = 0; 
    for(let i = 0; i <= b; i++){
        res += i;
    }
    return res;
};

const memFoo = memolzation(foo);

// console.log(memFoo(1,10000000000));
// console.log(memFoo(1,10000000001));
// console.log(memFoo(1,10000000000));
// console.log(memFoo(1,10000000001));
  
  