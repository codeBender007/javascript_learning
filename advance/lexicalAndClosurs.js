// "Jab function execute hota hai, tab uska lexical environment memory me banta hai.
// Agar us function ke andar koi inner function return ya store nahi ho raha jo outer
//  ke variables ko use kare, to execution ke baad uska lexical environment garbage collected ho jata hai."



// Q1) what is lexical scope ? 

// lexical scope ka mtlb ya hota hai ke inner function outer function ke variables ko access kr skta hai.
// lkn outer function kbi inner function ke variables ko access ni kr skta. 


// Q2) what is Closures ? 

// jb function call kya jata hai to uski body ki memory khtm ho jati hai.
// to Jab outer function execute ho jata hai aur uske andar defined inner function outer ke variable ko use
//  kar raha hota hai, to JavaScript us outer function ke lexical environment ko memory me retain karti 
//  hai — kyunki inner function ko us variable ki zarurat hoti hai.Ye environment closure banata hai.


function outer() {
    const num = 1
    function inner() {
        console.log(num);
    }
}