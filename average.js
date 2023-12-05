
let arr = [10, 24, 56, 72, -10, -88, 100, 564];

//find odd index element
let odd=arr.filter((ele,index)=>index%2!==0);//index==acc, element==arr

let output=odd.reduce((acc,curr)=>acc+curr)

let ans =(Math.ceil(output/odd.length))


console.log(ans)