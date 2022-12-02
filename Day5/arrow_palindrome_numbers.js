//Return all the palindromes in an array
const arr=[11,23,292,92,10,99,21];
let pali=(arr)=>{
    let temp=0;
    let rem=0;
    let rev=0;
    let pali=[];

    for(let i=0; i<arr.length; i++){
        temp=parseInt(arr[i]);
        rev=0;
        if(arr[i]!=0||arr[i]>10){
        while(temp>0){
        
            rem=parseInt(temp%10);
            temp=parseInt(temp/10);
            rev=parseInt((rev*10)+rem);

        }
    }
   //console.log(rev);
    if(rev==arr[i]){
        pali=[...pali,arr[i]];
    }
    }
    console.log(pali);
}
pali(arr);