
let a=require("underscore");
let arr=[1,3,4,5,6,6];
ar =a.without(arr,5);
console.log(arr);
let arr1=[2,34,5,6,7,8,8,9,99];
let m=a.find(arr,item=>item%5==0)
console.log(m)