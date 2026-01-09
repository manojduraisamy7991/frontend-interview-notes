// Numbers:  [1, 3, 2, 7]
// Target:   8
// Output: [[1,7]]

// brute force solution

const input = [1,7,3,5,6,9]
const sum  = 8
//exmple output = [1,7] [3,5] ,[2,6]

function result (val) {
    let results = []
    for(let i = 0;i<val.length ; i++){
          let findValue = sum-val[i]
          if(input.includes(findValue) && findValue !== -1){
              results.push([findValue,val[i]])
                 results.map((out)=>{
                  return out.reverse()
              })
          }
       
    }
     console.log(results);
}
result(input)
