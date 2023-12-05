let arr = [3,4,5,6,7]

let odd= arr.filter((ele,index)=>index%2!==1,0);
// console.log(odd)
odd.forEach((element, index, arr) => {
    console.log(element + (index < arr.length - 1 ? ' - ' : ''));
});