let a=[9,10,11,12,13];
let b=[1,2,3,5,22];
let len=a.length;

(()=>{
    let u= [...a,...b].sort(function(c,d){return c-d;});
    let l=u.length;
    let m=parseInt(l/2);
    let median= (u[m]+u[m-1])/2;
    console.log(`Median: ${median}`);

})(a,b)
