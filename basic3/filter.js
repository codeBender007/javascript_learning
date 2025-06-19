// agr curlibracket lga diya to return keyword use krna hi hoga return ke liya 
// or agr curlibracket ni lgay to return keyword ka use krne ki koi need ni 
// or filter bi forEach ki trh sirf array pr hi use hota h qki ya dono array ke hi method hai


const arr = [9,8,7,6,5,4,3,2,1]

// const or = arr.filter( (val) => {return val<4} )
// console.log(or)


// array methods chaining 
const real = arr.map( (val) => val*10 )
                .map( (val) => val+1 )
                .filter( (val) => val>=40 )
console.log(real)