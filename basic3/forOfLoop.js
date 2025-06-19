// for-of loop ya loop sirf array , string or map or set le liya use kr skte hai object is not iterable h .
const ar1 = [9,8,7,6,5]
for (const arr of ar1) {
    // console.log(arr)
}

const str = "adnan pasha"
for (const str1 of str) {
    // console.log(str1)
}

const map = new Map()
map.set('name',"adnan")
map.set('roll',1)
map.set('fees',1200)
for (const [key , value] of map) {
    // console.log(value)
}


