let a=80
let b="-"
let c=40
function calculator(son1, amal, son2){
if(amal=="+") {
  return `${son1} + ${son2}=${son1+son2}`
}
else if(amal=="-") {
  return `${son1} - ${son2} =${son1-son2}`
}
else if(amal=="/") {
  return `${son1} / ${son2} =${son1/son2}` }

else if(amal=="*") {
  return `${son1} * ${son2} =${son1*son2}`}
else{
  return "Amallar notog'ri kiritilgan"
}
}
console.log(calculator(a, b, c));

