const endDate="4 JUNE 2022 9:28 PM"

const value=document.getElementById("end-time");
console.log(value);

const inputs=document.querySelectorAll("input");
console.log(inputs);


function clock(){

    
const end=new Date(endDate);
const start=new Date();
const diff= (end-start)/1000;

if(diff<0){
return;
}
//console.log(diff);

inputs[0].value=Math.floor(diff /3600 /24);
//console.log(day);

inputs[1].value=Math.floor((diff /3600) %24);
//console.log(hour);

inputs[2].value=Math.floor((diff /60)%60);
//console.log(minutes);

inputs[3].value=Math.floor(diff %60);
// console.log(second);




}
setInterval(clock,1000);