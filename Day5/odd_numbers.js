//Print odd numbers in an array
const a=[1,3,5,6,2,9];
console.log(`List of odd numbers in the array:`)
(() =>{
    if(a.length==0){
        console.log("Array is empty");
    }else{
        for(let i=0;i<a.length;i++){
            if(a[i]%2!=0){
                console.log(a[i]);
            }
        }
    }
})(a)