
var sum=0;
var a= document.getElementById("increase");
var b= document.getElementById("decrease");

a.onclick=function () {
    sum = sum + 1;
    document.getElementById("change").disabled=false;
    document.getElementById("change").innerHTML = sum.toString();


}
//document.getElementById("test").innerHTML=sum;
b.onclick=function(){
if(sum>0){
    document.getElementById("change").disabled=false;
    sum=sum-1;
    document.getElementById("change").innerHTML=sum;


}
else {
    document.getElementById("change").disabled=true;
}
}