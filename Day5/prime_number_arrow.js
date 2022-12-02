//Return all the prime numbers in an array
const arr=[2,3,29,37,67,38,79,20];

(()=>{
    let isPrime=[];
    let flag;
    for(let i=0; i<arr.length; i++){
         if(arr[i]>1){
            for(let k=2;k<arr[i];k++){
                flag=true;
                //console.log(arr[i]);
                if(arr[i]%k==0){
                  flag=false;
                  break;
                   }
                }
                if(flag==true){
                    isPrime=[...isPrime, arr[i]];
                }
            }
        }

    
    console.log(isPrime);
})(arr)