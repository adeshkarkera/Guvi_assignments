const request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all");// link is not working

request.onload=function(){
    console.log(request.response);
}
request.onerror= function(){
    console.log(request.response);
}
request.send();