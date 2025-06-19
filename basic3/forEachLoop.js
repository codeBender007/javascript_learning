// forEach loop => ya loop sirf array ke liya bnaya gya hai or isme ek callback function bi pass kara jata h 
// or callback Function ka koi naam ni diya krte ( function () {} ) is trh se bna diya krte h callback function
// Or is callback function me ek paramter ni hota isme teen paramter ate h ek value , index , or entire Array 


const coding = ["js" , "python" , "cpp" , "c"]


coding.forEach( function(val,index,ar){
    // console.log(val)
    // console.log(index)
    // console.log(ar)
} )

coding.forEach( (val)=>{
    // console.log(val)
} )


const array = [
    {
        lan:"python",
        file:"py"
    },
        {
        lan:"javascript",
        file:"js"
    },    {
        lan:"java",
        file:"java"
    },
]

array.forEach( (val,index)=>{
    console.log(val.lan)
    console.log(val.lan)
} )