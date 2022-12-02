//Sum of all numbers in an array
const arr=[1,8,9,23,2,5,6];
((ar)=>{
    let sum=0;
    for(let i=0; i<ar.length; i++){
        sum+=ar[i];

    }
    console.log(sum);
})(arr)