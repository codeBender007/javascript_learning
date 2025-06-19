// forEach loop => ya loop sirf array ke liya bnaya gya hai or isme ek callback function bi pass kara jata h 
// or callback Function ka koi naam ni diya krte ( function () {} ) is trh se bna diya krte h callback function


const coding = ["js" , "python" , "cpp" , "c"]


coding.forEach( function(val){
    console.log(val)
} )

coding.forEach( (val)=>{
    // console.log(val)
} )