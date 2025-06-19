// reduce ke callback function me jo first(accumalator) parameter hota h uski
//  wahi value hoti h jo ham coma(,) ke bad value denge

const arr = [1,2,3,4]
const total = arr.reduce( (accumalator , currval)=>{
    console.log(`accumalator : ${accumalator} currentValue : ${currval} `)
    return accumalator+currval
},2 )

console.log(total)