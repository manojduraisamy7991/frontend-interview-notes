
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

/*3.Promise.any
 Promise.any - > it will return the first resolved promise, if all the promise are rejected then it will go to catch block */
const apiAny1 = Promise.reject('10')
const apiAny2 = Promise.resolve('20')

const resAny = Promise.any([apiAny1, apiAny2])
resAny.then((data)=>{
   console.log(data) 
}).catch((error)=>{
    console.log(error)
})

/*4.Promise.race
 Promise.race - > it will return the first settled promise (resolved/rejected) */
const apiRace1 = Promise.reject('10')
const apiRace2 = Promise.reject('error')
const apiRace3 = Promise.resolve('20')

const resRace = Promise.race([apiRace1, apiRace2, apiRace3])
resRace.then((data)=>{
   console.log(data) 
}).catch((error)=>{
    console.log(error)
})