// 1) using constructor 

// 2) object literal 

const obj1 = {
    name1:"adnan",
    roll1:123
}
const obj2 = {
    name2:"ayan",
    roll2:234
}

// accessing : agr multiple objects ko merge krna h to keys different honi chahiya value agr same ho to koi frk ni pdta
const obj3 = Object.assign({},obj1 , obj2)
// const obj3 = {...obj1 , ...obj2}

// console.log(obj3)

// in methods se ham object ki sari keys or values dekh skte h 
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))


// object with destructuring 
const course  = {
    courseName : "MDCA",
    id : 1,
    courseTeacher : "Adnan" 
}

const {courseTeacher} = course //normal destructuring
const {courseTeacher : Teacher} = course //how to change object key name using destructuring

console.log(courseTeacher) // in dono console ke same in
console.log(Teacher)