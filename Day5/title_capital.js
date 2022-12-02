//Convert all the strings to title caps in a string array
const str =["hEllo","WORLD"];
(()=>{
    for(let i=0; i<str.length; i++){
        str[i]=str[i].toLowerCase();
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);

    }
    console.log(str);
})(str)
