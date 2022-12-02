// how to compare two JSON have the same properties without the order?
let obj1= {name:"Person1", age:5};
let obj2={age:5, name:"Person1"  };

let obj1keys=Object.keys(obj1);
let obj2keys=Object.keys(obj2);
let flag=0;
console.log(`Is two object properties are same: `)
if(obj1keys.length!= obj2keys.length){
    conslole.log("false");
   }

for(const x of obj1keys){
   
   if(obj1[x]!==obj2[x]){
    console.log("false");
    flag++;
}
}
if(flag==0){
    console.log("true")
}
