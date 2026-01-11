// Polyfill for Array.prototype.myMap
const testA = [1,2,3,4,5]
Array.prototype.myMap = function(callback) {
    let result = []
    for(let i=0;i<this.length;i++) {
    result.push(callback(this[i], i, this))
    }
    return  result
}

const result = testA.myMap((item)=> item * 2)
console.log(result) 
function greet() {
}