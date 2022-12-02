//Sum of all numbers in an array
const arr=[1,8,9,23,2,5,6];
let sum=(ar)=>{

    let s=0;
    for(let i=0; i<ar.length; i++){
        s+=ar[i];

    }
    console.log(s);
}
sum(arr);