
/* 1.Promise.all
 Promise.all - > required all the promise should be resolved , if any one of the promise is rejected then it will go to reject all other resolved promise will be ignored */
const api1 = Promise.resolve('10')
//const api2 = Promise.reject('error')
const api3 = Promise.resolve('20')

const res = Promise.all([api1,api3])
res.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
/* 2.Promise.allSettled
 Promise.allSettled - > it will wait for all the promise to be settled (resolved/rejected) and give the result of all the promise */
const apiAllSettled1 = Promise.resolve('1')
const apiAllSettled2 = Promise.reject('2');

const resp = Promise.allSettled([apiAllSettled1, apiAllSettled2])
resp.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
