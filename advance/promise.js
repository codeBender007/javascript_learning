// promises ko handle krne ke liye teen keywords hai. 1then 2catch 3finally
// in teeno se promise ko handle kr skte hai. 
// then jab promise successfull run ho jay 
// catch jab promise me error a jay.
// finally promise successfull ho ya usme error ay ya keyword zarur run hoga 


// 1) ya first tareeka h. Promises ka code krne ka variable me store krwane wala tareeka. 
const promise = new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log("database connected")
    },1000)
    resolve()
    reject()
})

promise.then(()=>{
    console.log("not error")
})
promise.catch(()=>{
    console.log("error")
})


// 2) ya second tareeka hai Promises ko likhne ka 
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("DB connect")
    }, 1000);
    resolve()
    reject()
})
.then(()=>{console.log("DB without Error")})
.catch(()=>{console.log("DB with Error")})



// third promise
const promiseThree = new Promise((resolve,reject)=>{
    const error=true
    if(!error){
        resolve({username:"Adnan",password:"12345"})
    }
    else{
        reject("Error, something went wrong")
    }
})
promiseThree
.then((data)=>{
    console.log(data)
})
.catch((e)=>{
    console.log(e);
})
.finally(()=>{console.log("this is finally keyword")})



// fourth Promise 
const promiseFour = new Promise((resolve,reject)=>{
    const error=true
    if(!error){
        resolve({username:"Adnan",password:"12345"})
    }
    else{
        reject("Error, something went wrong")
    }
})

async function four(){
    try {
        const response = await promiseFour
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
four()




// async await ka use krke api ko call krna 
async function funApi(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data); 
    } catch (error) {
        console.log(error);
        
    }
}
funApi()




// is tareeka me sirf then or catch se bi ho skti h without any async await ka use kre  
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response);
    
})
.catch((e)=>{
    console.log(e);
    
})