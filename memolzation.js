'use strict';

const strKey = item => item.toString() + '(' + typeof item + ')';
const generateKey = args => args.map(strKey).join(',');


// const memolzation = func => {
//     const cache = {};
   
//     return (...args) => {
//         const key = generateKey(args); 
//         const val = cache[key];
//         if (val) return val;
//         const result = func(...args); 
//         cache[key] = result;
//         return result;
//     }
// }

const memolzation = (func, length) => {
    const cache = new Map();

    return (...args) => {
        const key = generateKey(args);

        if (cache.has(key)) return cache.get(key);
        const result = func(...args);
        if ( cache.size >= length) {
            const firstKey = cache.keys().next().value;
            console.log(cache.keys().next().value);
            console.log('Удаляем:' + firstKey);
            cache.delete(firstKey);
        }
        cache.set(key, result);
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

const memFoo = memolzation(foo, 4);

console.log('0', memFoo(1,1000000000));
console.log('1', memFoo(1,1000000001));
console.log('2', memFoo(1,1000000002));
console.log('3', memFoo(1,1000000003));
console.log('4', memFoo(1,1000000004));
console.log('5', memFoo(1,1000000005));
console.log('0', memFoo(1,1000000000));
console.log('1', memFoo(1,1000000001));
console.log('2', memFoo(1,1000000002));
console.log('3', memFoo(1,1000000003));
console.log('4', memFoo(1,1000000004));
console.log('5', memFoo(1,1000000005));


  
  