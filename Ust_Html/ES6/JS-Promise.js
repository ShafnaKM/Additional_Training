//let count=0; for invalid
let count=5;
let promise = new Promise(
    (resolve,reject)=> {
        if(count)
        setTimeout(()=>resolve('Promise Resolved'),2000) 
        else
        reject('Invalid count Value')
    }
)

promise.then((msg)=>{
    console.log(msg)
}).then(()=>console.log('Done')).catch(error=>console.error(error)).finally(()=>console.log('Execution Completed'))
