const zero = Object.is(+0, -0);
const naNRes = Object.is(NaN, NaN);
console.log('zero', zero);
console.log('naNRes', naNRes);