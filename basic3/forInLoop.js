// for-In loop sirf array , String or Object ke liya use hota hai. 

// object
const obj = {
    name:"Adnan",
    roll:12
}
for (const key in obj) {
        // console.log(obj[key])
}

// array 
const ar = [9,8,7,6,5]
for (const val in ar) {
//    console.log(ar[val])
}

// String 
const str = "Adnan pasha"
for (const st in str) {
    console.log(str[st])
}