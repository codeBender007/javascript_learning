// Question) constructor function or normal function me ktne frk hote hai 

// 1) constructor function ka first letter capital hona chahiya.
// 2) constructor function me this keyword ka use hona chahiya. 
// 3) constructor function new keyword ki help se call hona chahia. 

// Q ki new keyword constructor function ka ek naya object bna deta hai. 
// jo ki new keyword ka main kaam object bananeka hi hota hai 

// Question) hame constructor function banane ki need q padti hai.
// ans) wo sare kam ham normal  function se bi kr skte hai jo ham constructor function se krte hai.  


function ConFun(username , password){
     this.username = username;
     this.password = password;
    // return this
}
const obj1 = new ConFun("adnan",12345)
console.log(`username : ${obj1.username}`);
console.log(`password : ${obj1.password}`);


const obj2 = new ConFun("pasha",12345)
console.log(`username : ${obj2.username}`);
console.log(`password : ${obj2.password}`);


