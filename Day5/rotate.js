//Rotate an array by k times
let arr=[1,2,3,4,5];
console.log(`Original array: ${arr}`);
let k=3;
console.log(`Number of rotations: ${k}`);
(()=>{
    let first;
    while(k>0){
        first=arr[0];
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1){
            arr[i]=first;
        }else{
            arr[i]=arr[i+1];
        }

       
    }
    k--;
  }
  console.log(`Array after rotating: ${arr}`);
})(arr,k)