// optimize solution
const nums = [1, 7, 3, 5, 6, 9, 1]
const target = 8

function getResult (input,k) {
    let seen = new Set()
    let result = []
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
           const sum =nums[i]+ nums[j] == k
           if(sum){
            const sort = [nums[i], nums[j]].sort((a,b)=>a-b)
            const key = sort.toString()
           if(!seen.has(key)){
                         seen.add(key);
            result.push([nums[i],nums[j]])   
           }
           }
        }
            
    }
   return   result

}

getResult(nums, target)
