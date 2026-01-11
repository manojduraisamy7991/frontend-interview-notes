function getName (skill1, skill2)  {
    return this.name + 'Skills='+ skill1 + skill2
}
const obj = {
    name :'Manoj'
}
// Using call,apply,bind methods 
console.log(getName.call(obj,'reactjs', 'nextjs'))
console.log(getName.apply(obj,['redux','html']))
const bindFuc = getName.bind(obj,'css','javascript')
console.log(bindFuc())

