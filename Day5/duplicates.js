//Remove duplicates from an array
let arr=[2,3,5,22,88,22,1,1];

(()=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr[j]=arr[j+1];
            arr.pop();

        }
    }
    }
    console.log(arr);

})(arr)