let nums=[2,3,4,5,6,7,8];
nums.forEach((num)=>{
    console.log(num*num);
}); 

let newArray=nums.map((nums)=>{
 return nums*nums;
})
console.log(newArray);
